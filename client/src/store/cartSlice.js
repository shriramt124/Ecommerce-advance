 
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // cart:[],
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            //payload = newItem
            state.cart.push(action.payload);

        },
        deleteItem(state, action) {
            //payload = piizaId
            state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)

        },
        increseItemQuantity(state, action) {
            //payload = pizzaId
            const item = state.cart.find((item) => item.pizzaId === action.payload)
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;

        },
        decreaseItemQuantity(state, action) {
            //payload = pizzaId
            const item = state.cart.find((item) => item.pizzaId === action.payload);
            if (item.quantity === 1) {
                state.cart = state.cart.filter(item => item.pizzaId !== action.payload);

            } else {
                item.quantity--;
                item.totalPrice = item.quantity * item.unitPrice;
            }
        },
        clearCart(state) {
            state.cart = []
        }
    }
})


export const { addItem, deleteItem, increseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;


export default cartSlice.reducer;
