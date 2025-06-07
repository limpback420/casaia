import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

export default function withStripe(children: React.ReactNode) {
  return <Elements stripe={stripePromise}>{children}</Elements>;
}
