import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Confirm from './Confirm';
import CardHook from '../../../Hook/CardHook';
import { useLoaderData } from 'react-router-dom';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
   // const [card]=CardHook();
   const detail = useLoaderData();
   const {_id,Image,Name,InstructorName,AvailableSeats,Price,email,cardItemId} = detail;
   console.log(_id)
    return (
        <div>
             <h3 className="text-3xl">Please Complete Your payment:{_id}</h3>
             <Elements stripe={stripePromise}>
                 <Confirm detail={detail} Price={Price}></Confirm> 
            </Elements>
        </div>
    );
};

export default Payment;