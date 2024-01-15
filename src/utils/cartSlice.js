import { createSlice } from "@reduxjs/toolkit";
const cartitems =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
const cartSlice = createSlice({
    name: 'cart',
    initialState :{
        items:cartitems,
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        removeItem:(state,action)=>{
            const itemId = action.payload;
			const itemIndex = state.items.findIndex(item => item?.card?.info?.id === itemId);
			console.log(itemIndex);
            if (itemIndex !== -1) {
				state.items.splice(itemIndex, 1);
			}
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        clearItem:(state)=>{
            state.items.length = 0;
        },
    },
});

//console.log(cartSlice);

export const {addItem,removeItem,clearItem} = cartSlice.actions;
export default cartSlice.reducer;
