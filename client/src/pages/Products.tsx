import axios from "axios"
import Card from '../components/Card'

import ProductData from "../api/products.json"
import { SERVER_URL } from "../constant";

export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Products = () => {


  const checkoutHandler = async ({ name, amount }: { name: string, amount: string }) => {
    const { data: { order } } = await axios.post('http://localhost:8088/api/v1/payment/checkout', {
      name,
      amount
    })

    console.log(order)

    const options = {
      "key": "rzp_test_vzN8hoKk1JAewx", // Enter the Key ID generated from the Dashboard
      "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Payment razorpay",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // "handler": function (response: any) {
      //   alert(response.razorpay_payment_id);
      //   alert(response.razorpay_order_id);
      //   alert(response.razorpay_signature)
      // },
      callback_url: `${SERVER_URL}/payment/verification`,
      "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000"
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const rzp1 = new window.Razorpay(options);

    rzp1.open()

  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            ProductData.map((product) => {
              return (
                <Card product={product} checkoutHandler={checkoutHandler} key={product.id} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Products