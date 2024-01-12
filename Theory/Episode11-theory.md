## Namaste React Course by Akshay Saini
# Chapter 11 - Data is the new oil

## Q: What is Higher Order Component?
A: Higher order component is the function that takes an Component and returns the new component. It means it takes a Component and enhance it or modify it and return new component.A higher-order component (HOC) is the advanced technique in React.js for reusing a component logic.
Reference link - `https://www.codingame.com/playgrounds/8595/reactjs-higher-order-components-tutorial`

## Q: What is prop drilling?
A: Prop drilling occurs when a parent component passes data as props to its children components that do not need that props – instead, they only pass it down to another component who needs it.

## Q: What is lifting the state up?
A: It means the state of the child component is controlled by its parent component and the child component is a controlled component. Means we are lifting the state of the child component to the parent component.

## Q: What is controlled and uncontrolled component?
A: Controlled components refer to the components where the state and behaviors are controlled by Parent components while Uncontrolled components are the ones having control of their own state and manage the behaviors on themselves.

## Q: What is Context API?
A: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.

## Q: What is Context Provider and Context Consumer?
A: React.createContext() will create the context. It returns a `consumer` and a `provider`. `Provider` is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. `Consumer` as it so happens is a component that consumes and uses the state.

Basically, Context API consists of two main components: the `context provider` and the `context consumer`. 
- The provider is responsible for creating and managing the context, which holds the data to be shared between components. 
- On the other hand, the consumer is used to access the context and its data from within a component.

## Q: if you do not pass a value to the provider does it take the default value?
A: Yes, it will take the default value of the context that you have created.

## Coding
# Practice React Context with code examples
# Try out Nested Contexts

# References
# Lifting state up - `https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example`
# React Context - `https://react.dev/reference/react/useContext`