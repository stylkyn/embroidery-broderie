import { loadStripe } from '@stripe/stripe-js';

export const STRIPE_KEY = process.env.NEXT_PUBLIC_STRIPE_KEY;
export const STRIPE_PROMISE = STRIPE_KEY ? loadStripe(STRIPE_KEY) : null;
export const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
