import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
    name: 'cart',
    initialState: {
        items: []
    }, 
    reducers: {
    //this is where we create actions
    //an actions has a key, and value is callback function,
    //...Redux will pass two arguments to this function: current state and action
        addItem: (state, action) => {
        //action has a name and a payload, the payload being whatever we pass into this action when we invoke it,
        console.log(action)
        //this look like we're mutating but redux is using an immutability library bts
        //state.items.push(action.payload)
        //state.items.push({ ...action.payload, quantity: 1 })
        //we have added a property to our product now, by adding quantity key
            const exisitingProduct = state.items.find((item) => item.id === action.payload.id);

            if (exisitingProduct) {
                exisitingProduct.quantity += 1;
                //redux toolkit immutable library enables this above
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },
        removeItem: (state, action) => {
            const exisitingProduct = state.items.find((item) => item.id === action.payload.id);

            if (exisitingProduct && exisitingProduct.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== action.payload.id)
                //return a new array of items, except the item that was in the payload
                //replaces it and removes that one
            } else if (exisitingProduct) {
                exisitingProduct.quantity -= 1;
            }
        }
    }
})