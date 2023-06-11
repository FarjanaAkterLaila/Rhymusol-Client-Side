import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import AxioSe from '../../../Hook/AxioSe';
import{ AuthContext } from '../../../Providers/AuthProvider';


const CheckoutFrom = ({price}) => {
    const stripe = useStripe();
const elements = useElements();
const {user} = useContext(AuthContext)
const [axiosSecure] = AxioSe()
const [cardError , setCardError]=useState('')
const [clientSecret , setClientSecret]=useState('');
useEffect(()=>
{
    console.log({price})
    axiosSecure.post('/create-payment-intent',{price}).then(res=>{
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
    })
},[])
    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return
        }
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('error',error)
            setCardError(error.message)
        }
        else{
            setCardError('')
            console.log('payment metod',paymentMethod)
        }
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email||'anonymous',
              name: user?.displayName||'anonymous',
            },
          },
        },
      );
       if (confirmError) {
             console.log(confirmError);
        }
        console.log(paymentIntent);
    }
 
    return (
       <>
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='mt-4 btn btn-outline btn-error btn-sm' type="submit" disabled={!stripe||!clientSecret }>
          Pay
        </button>
      </form>
      {
        cardError && <p className='text-red mt-4'>{cardError}</p>
      }
       </>
    );
};

export default CheckoutFrom;