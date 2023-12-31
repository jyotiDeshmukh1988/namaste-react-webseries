## Namaste React Course by Akshay Saini
# Chapter 08 - Let's get Classy


## Q: How do you create `Nested Routes` react-router-dom configuration?
A: We can create a `Nested Routes` inside a react router configuration as follows:
first call createBrowserRouter for routing different pages
```
const router = createBrowserRouter([
   {
      path: "/", // show path for routing
      element: <Parent />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [ // show children component for routing
         {
            path: "/path",
            element: <Child />
         }
      ],
   }
])
```
Now we can create a nested routing for `/path` using `children` again as follows:

```
const router = createBrowserRouter([
   {
      path: "/",
      element: <Parent />,
      errorElement: <Error />,
      children: [
         {
            path: "/path",
            element: <Child />,
            children: [ // nested routing for subchild
               {
                  path: "/child",
                  element: <SubChild />,
               }
            ],
         }
      ],
   }
])
```


## Q: Read about `createHashRouter`, `createMemoryRouter` from React Router docs.
A: `createHashRouter` is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the `hash (#)` portion of the URL to manage the "application URL".
Other than that, it is functionally the same as `createBrowserRouter`.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-hash-router)

`createMemoryRouter` Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-memory-router)


## Q: What is the order of life cycle method calls in `Class Based Components`?
A: Following is the order of lifecycle methods calls in `Class Based Components`:
1. constructor()
2. render ()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

For more reference [React-Lifecycle-methods-Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)


## Q: Why do we use `componentDidMount`?
A: The `componentDidMount()` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.
Wwe can run any piece of react code to modify the components. For ex. It's the best place to `make API calls`.

## Q: What is use of `componentDidUpdate`?
A: The `componentDidUpdate()` method allows us to execute the React code when the component is updated. All the network requests that are to be made when the props passed to the component changes are coded here.

The `componentDidUpdate()` is called after `componentDidMount()` and can be useful to perform some action when the state of the component changes.

Syntax:
``````
componentDidUpdate(prevProps, prevState, snapshot)
``````
# References - https://www.geeksforgeeks.org/reactjs-componentdidupdate-method/

## Q: Why do we use `componentWillUnmount`? Show with example.
A: `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance.
For example, in Repo class, during `componentDidMount()` a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example `clearInterval`(timer) to clear the timer interval before unmounting Repo component.


## Q: (Research) Why do we use `super(props)` in constructor?
A: `super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component.
super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then `Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor` error is thrown in the console.

The main difference between super() and super(props) is the `this`.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used then you can able to access `this.props` inside the child constructor.


## Q: (Research) Why can't we have the `callback function` of `useEffect async`?
A: `useEffect` expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as `async`

When you use an async function like
``````
async () => {
    try {
        const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
        const json = await response.json();
        setPosts(json.data.children.map(it => it.data));
    } catch (e) {
        console.error(e);
    }
}
``````
it returns a promise and `useEffect` doesn't expect the callback function to return Promise, rather it expects that nothing is returned or a function is returned.

As a workaround for the warning you can use a `self invoking async function`.
``````
useEffect(() => {
    (async function() {
        try {
            const response = await fetch(
                `https://www.reddit.com/r/${subreddit}.json`
            );
            const json = await response.json();
            setPosts(json.data.children.map(it => it.data));
        } catch (e) {
            console.error(e);
        }
    })();
}, []);
``````
or to make it more cleaner you could `define a function and then call it`
``````
useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch(
                `https://www.reddit.com/r/${subreddit}.json`
            );
            const json = await response.json();
            setPosts(json.data.children.map(it => it.data));
        } catch (e) {
            console.error(e);
        }
    };
    fetchData();
}, []);
``````

# References - https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret

## Q: What is the difference between `class component` and `functional component`?
A: class component contain render method which return a JSX but function component contain return method which return the JSX.
class component return a class and a function component return a function.

## Q: `Class components` receive props how?
A: `class components` receive props via constructor method passing props as arguments

```````
constructor(props) {
    super(props);
    console.log("Constructor called");
}

```````