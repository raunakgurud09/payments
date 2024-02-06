import { TProduct } from "../pages/Products"

type CardProps = {
  product: TProduct
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  checkoutHandler: any
}

const Card = ({ product, checkoutHandler }: CardProps) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full flex flex-col items-center">
      <a className="block relative h-48 rounded overflow-hidden w-full px-4">
        <img
          alt="ecommerce"
          className="bg-blue-200 object-cover object-center w-full h-full block"
          src={product.image}
        />
      </a>
      <div className="mt-4 px-4 w-full">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
        <h2 className="text-white/80 title-font text-lg font-medium">{product.title}</h2>
        <p className="mt-1 text-white/70"> &#8377; {product.price}</p>
      </div>
      <button onClick={() => checkoutHandler({
        name: product.title,
        amount: product.price,
      })} className="px-6 py-2 rounded-md bg-black text-white">Pay</button>
    </div>
  )
}

export default Card