const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer:{
        cart:cartReducer
    }
}); // create a redux store

export default appStore;