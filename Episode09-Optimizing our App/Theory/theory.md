## Namaste React Course by Akshay Saini
# Chapter 09 - Optimizing our application

## Q: What is `custom hook`?
A: It is just a normal utility javascript function.

## Q: What is code splitting and its benefits in React?
A: Code-Splitting is a feature supported by Webpack and Browserify, which can create multiple bundles that can be dynamically loaded at runtime. Code splitting uses React. lazy and Suspense tool/library, which helps you to load a dependency lazily and only load it when needed by the user.

## Q: How do you improve performance in React with code splitting?
A: Lazy loading and code splitting can be combined for optimal performance. By using `React. lazy()` with dynamic `import()` statements, Webpack will automatically split your code into smaller chunks. To further optimize your application, consider using the react-loadable library.

## Q: When and why do we need `lazy()`?
A: The benefits of lazy loading include: Reduces initial load time – Lazy loading a webpage reduces page weight, allowing for a quicker page load time. Bandwidth conservation – Lazy loading conserves bandwidth by delivering content to users only if it's requested.

## Q: What does `lazy ()` do in react?
A: lazy() It is a new function in react that lets you load react components lazily through code splitting without help from any additional libraries. Lazy loading is the technique of rendering only-needed or critical user interface items first, then quietly unrolling the non-critical items later.
```````
const Grocery = lazy(() => import("./components/Grocery"));
```````

## Q: What is `suspense`?
A: Suspense is a component required by the lazy function basically used to wrap lazy components. Multiple lazy components can be wrapped with the suspense component. It takes a fallback property that accepts the react elements you want to render as the lazy component is being loaded.
```````
{
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
```````      

## Q: Why we got this `error`: A component was suspended while responding to `synchronous input`. This will cause the `UI` to be replaced with a `loading indicator`. To `fix this`, `updates that suspend` should be wrapped with `start transition`? How does `suspense fix` this error?
A: When we use lazy() function for dynamic loading of the component means we are displaying the component with the user needs so react take some time to load the dynamic component data till this duration it display this error till the data is not loaded, so to avoid this error we have to wrapped the dynamic component by suspense component and add fallback attribute to display the loading element till the data is not loaded.

For eg 👍
`````````
const Grocery = lazy(() => import("./components/Grocery")); // dynamic import of Grocery component
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
`````````

## Q: `Advantages and Disadvantages` of using this `code splitting pattern`?
A: `Advantages`
Code splitting can provide several advantages for your JavaScript performance, such as faster initial loading, better caching, and enhanced user experience. By splitting your code into smaller chunks, you can reduce the size of your main bundle and the time it takes to download, parse, and execute it.
`Disadvantages`
Increased complexity in development and testing processes, more network requests that can affect performance, and additional code and dependencies that can increase the bundle size.

## Q: When `do we and why do we need suspense`?
A: Using `lazy() `component code is being loaded on runtime, the user has experience a delay until the network has finished loading and executing the next chunk of JavaScript code.This is where `React.Suspense` comes in handy, and displays a graceful fallback UI to the user until the data loads.
React.Suspense tell the users that it’s loading the next chunk, very shortly!. 

## Q: What’s the difference between React `Lazy` and `Suspense`?
A: React lazy function allows you to dynamically import a component and render it only when it’s required. While suspense is a component wrapped around react components that display a fallback UI while the component is lazy loaded.