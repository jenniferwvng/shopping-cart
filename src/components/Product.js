import React from 'react'
import { useDispatch } from 'react-redux'
//import the reducer we gonna dispatch an action from:
import { cart } from 'reducers/cart'

export const Product = ({ product }) => {
  //initialize our dispatch:
  const dispatch = useDispatch();

  return (
    <article className="product">
      <span className="emoji" role="img" aria-label={product.title}>{product.emoji}</span>
      <p>{product.price}:-</p>

      <button
        type="button"
        disabled={product.inventory === 0}
        //addItem is the action we just created, and when we invoke addItem(), this is the payload that we're creating
        //the payload will in this case be product argument content
        //we want to use this payload to do something with the cart
        onClick={() => dispatch(cart.actions.addItem(product))}>
        Add to cart
      </button>
    </article>
  )
}
