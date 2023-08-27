## Namaste React Course by Akshay Saini
# Chapter 05 - Let's get Hooked!

## Q: What is the difference between `Named export`, `Default export`, and `* as export`?
A: ES6 provides us to import & export a module and use it in other files. ES6 provides two ways to export a module from a file: `named export` and `default export`.
In `Named export`, one can have multiple named exports per file. Then import the specific exports surrounded by `{}` braces. The name of imported module has to be the same as the name of the exported module.
In `Named export`, the component is exported from MyComponent.js file like:
```
export const MyComponent = () => {}
export const MyComponent2 = () => {}
``` 
and the above two components is imported from MyComponent.js file like: here we must use `{}` in MyComponent.
```
// ex. importing a single named export
import { MyComponent } from "./MyComponent";

// ex. importing multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";

// ex. giving a named import a different name by using "as":
import { MyComponent2 as MyNewComponent } from "./MyComponent";
```

In `Default export`, One can have only one default export per file. The naming of import is completely independent in default export means we can use any name we like and import it.
In `Default export`, the component is exported from MyComponent.js file like:
```
const MyComponent = () => {}
export default MyComponent;
```
and the component is imported from MyComponent.js file like: here we must omit `{}` in MyComponent.
```
import MyComponent from "./MyComponent";
```
import MyComrename from "./MyComponent"; // while import you can rename the default export directly without using "as" aliases as we do it named export component.

In `* as export`, it is used to import the whole module as a component and access the components inside the module.
In `* as export`, the component is exported from MyComponent.js file like:
```
export const MyComponent = () => {}
export const MyComponent2 = () => {}
export const MyComponent3 = () => {}
``` 
and the component is imported from MyComponent.js file like:
```
import * as MainComponents from "./MyComponent";
```
Now we can use them in JSX as:
```
<MainComponents.MyComponent />
<MainComponents.MyComponent2 />
<MainComponents.MyComponent3 />
```
We can use `Named export` and `Default export` together. So you should export like:
```
export const MyComponent2 = () => {}
const MyComponent = () => {}
export default MyComponent;
```
and import like:
```
import MyComponent, {MyComponent2} from "./MyComponent";
```

## Q: What is the importance of `config.js` file?
A: We use the `config.js` for storing the hard-coded data or global data that we can used throughout the application.

## Q: What are `React Hooks`?
A: React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. React Hooks are JavaScript functions that manage the state's behaviour and side effects by isolating them from a component.

So, we can now isolate all the stateful logic in hooks and use (as hooks are functions, too) into the components.

### React provides a bunch of standard in-built hooks:
- useState: To manage states. Returns a stateful value and an updater function to update it.
- useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
- useContext: To return the current value for a context.
- useReducer: A useState alternative to help with complex state management.
- useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
- useMemo: It returns a memoized value that helps in performance optimizations.
- useRef: It returns a ref object with a .current property. The ref object is mutable. It is mainly used to access a child component imperatively.
- useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
- useDebugValue: Helps to display a label in React DevTools for custom hooks.

Each of these hook names start with use. Yes, this is a standard practice to identify a hook in the React codebase quickly. 

## Q: Why do we need `useState Hook`?
A: useState is a React Hook that lets you add a state variable to your component that affects the state of the react functional component. Whenever some modification is done on a useState variable, then component gets re-rendered. The React useState Hook allows us to track state in a function component.

It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called. It can be used like this:

## Syntax for useState hook
```
const [state, setState] = useState(initialstate);
```

Here, the `initialValue` is the value you want to start with, and `state` is the current state value that can be used in your component. The `setState` function can be used to update the `state`, triggering a re-render of your component.

## import useState

`useState` is a named export from react. To use it, you can write React.useState or import it by writing useState:

```
import React, { useState } from "react";
```