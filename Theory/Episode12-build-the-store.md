## Namaste React Course by Akshay Saini

# Chapter 12 - Let's build our store

# for eg : let see we have a add to cart button clicking the button do the below steps in redux toolkit

- Click on add button dispatch an action
- then action will call the reducer function
- then reducer function update or modify the state or can call us slice of the redux store
- to read the data from the redux store will use the selector
- selector means subscribing to the store means when a component is subscribed to the store using the selector will get the data from the redux store

# Redux Toolkit connection steps

- Install @reduxjs/toolkit and react-redux
- Build our store
  `const { configureStore } = require("@reduxjs/toolkit");`
  `const appStore = configureStore();` // create a redux store
- Connect our store to our app
  `import { Provider } from "react-redux";` // required to connect to the redux toolkit
  `<Provider store={appStore}>`
  `<div className="main-container">`
  `<Header />`
  `<div className="container mt-10 mx-auto p-10"><Outlet /></div>`
  `<Footer />`
  `</div>`
  `</Provider>`
- Create the slice(cartslice)
- dispatch action
- selector(means subsribe to the  store)
