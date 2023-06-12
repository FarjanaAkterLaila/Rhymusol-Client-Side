import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import AxioSe from '../../../Hook/AxioSe';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';


const CheckoutFrom = ({ detail, price }) => {
  console.log(detail.Name);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext)
  const [axiosSecure] = AxioSe()
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const navigate = useNavigate();
  useEffect(() => {

    axiosSecure.post('/create-payment-intent', { price }).then(res => {
      console.log(res.data.clientSecret)
      setClientSecret(res.data.clientSecret)
    })
  }, [])
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if (error) {
      console.log('error', error)
      setCardError(error.message)
    }
    else {
      setCardError('')
      console.log('payment metod', paymentMethod)
    }
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous',
          },
        },
      },
    );

    if (confirmError) {
      console.log(confirmError);
    }
    console.log('payment intent', paymentIntent)
    setProcessing(false)
    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);
      // save payment information to the server
      const payment = {
        ...detail,
        transactionId: paymentIntent.id,
        date: new Date(),
        paid:paymentIntent.status
      }
      axiosSecure.post('/payments', payment)
        .then(res => {
          console.log(res.data);
          if (res.data.result.insertedId) {
            // display confirm
            
           
                
                // navigate to the Myadditem component
                navigate('/dashboard/myadditeam');
          
             
          }
        })
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
        <button className='mt-4 btn btn-outline btn-error btn-sm' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {
        cardError && <p className='text-red mt-4'>{cardError}</p>
        
      }
       {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
    </>
  );
};

export default CheckoutFrom;