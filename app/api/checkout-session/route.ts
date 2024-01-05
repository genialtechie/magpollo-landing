import Stripe from 'stripe';

import { NextResponse } from 'next/server';

let stripeKey = process.env.STRIPE_SECRET_KEY || '';
const stripe = new Stripe(stripeKey, {
  apiVersion: '2022-11-15',
});

export async function POST(request: Request) {
  const body = await request.json();
  const priceId = body.priceId;
  const stripeId = body.stripeId;
  const url = body.url;

  const session = await stripe.checkout.sessions.create({
    customer: stripeId,
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: 'http://localhost:3000/subscribed?success=true&prevurl=' + url,
    cancel_url: 'http://localhost:3000/subscribed?success=false&prevurl=' + url,
  });

  return NextResponse.json({ url: session.url });
}
