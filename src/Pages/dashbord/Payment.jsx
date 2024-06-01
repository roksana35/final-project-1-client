import ShareSection from "../Home/ShareSection";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm'


const stripePromise=loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_KEY);

const Payment = () => {
    return (
        <div>
            <div>
                <ShareSection heading='Payment to eat' subheading='Payment'></ShareSection>
                <div className="mt-6">
                <Elements stripe={stripePromise} >
            <CheckoutForm></CheckoutForm>
            </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;