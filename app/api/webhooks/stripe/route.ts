import { headers } from 'next/headers';
import { buffer } from 'micro';
import prisma from '@/lib/prisma/prisma';
import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripeKey = process.env.STRIPE_SECRET_KEY || '';
const stripe = new Stripe(stripeKey, {
  apiVersion: '2022-11-15',
});

//listen for webhooks

async function fulfillOrder(session: Stripe.Checkout.Session) {
  const customer = await stripe.customers.retrieve(session.customer as string);
  let email = '';
  if ('email' in customer) {
    email = customer.email as string;
  }

  if (email) {
    await prisma?.user.update({
      where: {
        email,
      },
      data: {
        isSuscribed: true,
      },
    });
  }
}

export async function POST(request: Request) {
  const sig = headers().get('stripe-signature') || '';
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || '';
  const body = await request.arrayBuffer();
  const bufferReq = Buffer.from(body);

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(bufferReq, sig, endpointSecret);
  } catch (err) {
    console.log(`⚠️  Webhook signature verification failed.`, err);
    return NextResponse.json({ error: err }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'customer.subscription.created':
      const session = event.data.object as Stripe.Checkout.Session;
      // Fulfill the purchase...
      await fulfillOrder(session);
      break;
    case 'customer.subscription.updated':
      const sessionUpdated = event.data.object as Stripe.Checkout.Session;
      // Fulfill the purchase...
      await fulfillOrder(sessionUpdated);
      break;
    case 'customer.subscription.deleted':
      const sessionDeleted = event.data.object as Stripe.Checkout.Session;
      const customer = await stripe.customers.retrieve(
        sessionDeleted.customer as string
      );
      let email = '';
      if ('email' in customer) email = customer.email as string;
      // Update the database...
      await prisma?.user.update({
        where: {
          email,
        },
        data: {
          isSuscribed: false,
        },
      });
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  return NextResponse.json({ received: true }, { status: 200 });
}
