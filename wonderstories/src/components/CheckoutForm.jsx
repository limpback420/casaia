import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async e => {
    e.preventDefault();
    if (!stripe || !elements) return;
    // TODO: crear sesión y manejar pago
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <CardElement />
      <button type="submit" disabled={!stripe} className="mt-4 btn">
        Pagar
      </button>
    </form>
  );
}
