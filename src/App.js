import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { Products } from 'components/Products'
import { Cart } from 'components/Cart'

import { cart } from 'reducers/cart'
import { products } from 'reducers/products'
//Redux toolkit of doing this will be described here. This is the redux toolkit boilerplate.

//need a created store to pass in as props to Provider, and need to combine these reducers into one,
//thus import utility methods: configurestore, combinereducers

//create single reducer from severeal reducers
const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer
})

//now use the reducer we just created to create a store
const store = configureStore({ reducer }) //same as reducer: reducer (ES6)

//The Provider is now providing the store to any component that is within it, to interact with it
export const App = () => (
  <Provider store={store}> 
    <Cart />
    <Products />
  </Provider>
)
