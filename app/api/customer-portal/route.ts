import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripeKey = process.env.STRIPE_SECRET_KEY || '';
const stripe = new Stripe(stripeKey, {
  apiVersion: '2022-11-15',
});

function getReturnUrl(): string {
  if (process.env.NODE_ENV === 'production') {
    return 'https://motormentor.magpollo.com/dashboard/settings';
  } else {
    return 'http://localhost:3000/dashboard/settings';
  }
}

export async function POST(request: Request) {
  // create stripe customer portal session
  const body = await request.json();
  const stripeId = body.stripeId;
  const url = getReturnUrl();

  const session = await stripe.billingPortal.sessions.create({
    customer: stripeId,
    return_url: url,
  });

  return NextResponse.json({ url: session.url });
}
