import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from './Product'

export const Products = () => {
  // TODO - fetch all products from the store
  //use useSelector to fetch products, useselector function takes state/store, and we 
  //...then just say what we want out of it, e.g. store.products
  const allProducts = useSelector((store) => store.products);

  return (
    <div className="products">
      {allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
