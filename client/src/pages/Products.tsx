import React from 'react'
import Card from '../components/Card'

import ProductData from "../api/products.json"

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
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            ProductData.map((product) => {
              return (
                <Card product={product} key={product.id} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Products