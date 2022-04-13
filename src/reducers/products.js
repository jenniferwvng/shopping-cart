import { createSlice } from '@reduxjs/toolkit'

const productData = [
    { id: 1, title: 'Socks', price: 100, emoji: 'hej' },
    { id: 2, title: 'T-shirt', price: 200, emoji: 'hej'},
    { id: 3, title: 'Pants', price: 350, emoji: 'hej'},
    { id: 4, title: 'Dress', price: 350, emoji: 'hej'}
]

//no reducers used here, since not making changes in the productData in this application
//just making use of the fact that redux will use the productData available to any component that asks for it

//object as argument to createslice function
export const products = createSlice({
    name: 'products', //what the object in our store will be called
    initialState: productData //here you can pass data or fetch from API/get data in a "better way"
})