## Namaste React Course by Akshay Saini
# Chapter 06 - Exploring the world

## Q: What is `Microservice`?
A: A microservices architecture, also simply known as microservices, is an architectural method that relies on a series of independently deployable services. These services have their own business logic and database with a specific goal. Updating, testing, deployment, and scaling occur within each service. Microservices decouple major business, domain-specific concerns into separate, independent code bases. Microservices don’t reduce complexity, but they make any complexity visible and more manageable by separating tasks into smaller processes that function independently of each other and contribute to the overall whole. 
# Advantages
- Agility – Promote agile ways of working with small teams that deploy frequently.
- Flexible scaling – If a microservice reaches its load capacity, new instances of that service can rapidly be deployed to the accompanying cluster to help relieve pressure. We are now multi-tenanant and stateless with customers spread across multiple instances. Now we can support much larger instance sizes. 
- Continuous deployment – We now have frequent and faster release cycles. Before we would push out updates once a week and now we can do so about two to three times a day. 
- Highly maintainable and testable – Teams can experiment with new features and roll back if something doesn’t work. This makes it easier to update code and accelerates time-to-market for new features. Plus, it is easy to isolate and fix faults and bugs in individual services.
- Independently deployable – Since microservices are individual units they allow for fast and easy independent deployment of individual features. 
- Technology flexibility – Microservice architectures allow teams the freedom to select the tools they desire. 
- High reliability – You can deploy changes for a specific service, without the threat of bringing down the entire application.


## Q: What is `Monolith architecture`?
A monolithic architecture is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications. The word “monolith” is often attributed to something large and glacial, which isn’t far from the truth of a monolith architecture for software design. A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together.  To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming. 
# Advantages
- Easy deployment – One executable file or directory makes deployment easier.
Development – When an application is built with one code base, it is easier to develop.
- Performance – In a centralized code base and repository, one API can often perform the same function that numerous APIs perform with microservices.
- Simplified testing – Since a monolithic application is a single, centralized unit, end-to-end testing can be performed faster than with a distributed application. 
- Easy debugging – With all code located in one place, it’s easier to follow a request and find an issue.
# Disadvantages
- Slower development speed – A large, monolithic application makes development more complex and slower.
- Scalability – You can’t scale individual components.
- Reliability – If there’s an error in any module, it could affect the entire application’s availability.
- Barrier to technology adoption – Any changes in the framework or language affects the entire application, making changes often expensive and time-consuming.
- Lack of Technology – A monolith is constrained by the technologies already used in the monolith.
- Deployment – A small change to a monolithic application requires the redeployment of the entire monolith.

## Q: What is the difference between `Monolith and Microservice`?
A: Monolithic applications store whole application in one big container comprising of tightly coupled services. 
On the other hand, microservices breaks an application into several small self-contained services that are loosely coupled with each other and are specific to a business domain.

## Q: Why useState hook is required?
A: Because javascript variables have not the capability to update or re-render the UI of component. Here component
local state variable comes into it having the capability to re-render the UI so whenever you call the updater function of the state variable react will re-render or refresh whole UI of the component.

## Q: Why do we need a `useEffect Hook`?
A: `useEffect Hook` is javascript function provided by `react`. The useEffect Hook allows you to `perform side effects` in your components. Some examples of side effects are: `fetching API data`, `directly updating the DOM`, and `setting up subscriptions or timers`, etc can be lead to unwarranted side-effects.
useEffect accepts `two arguments`, a `callback function` and a `dependency array`. The second argument is optional.

```
useEffect(() => {}, [])
```
The `() => {}` is callback function and `[]` is called a empty dependency array. 
If anything that we pass (suppose currentState) inside the `[]` it trigger the callback function and changes the state of the application.
```
useEffect(() => {
    setCurrentState("true");
}, [currentState])
```
If we do not pass empty dependency array then the useEffect runs everytime when the UI is rendered.

```
useEffect(() => {})
```

## Q: What is `Optional Chaining`?
A: `Optional Chaining` (`?.`) operator accesses an object's property or calls a function. If the object accessed or function called is `undefined or null` , it returns `undefined` instead of throwing an error.
`Optional Chaining` (`?.`) is good way of accessing the object keys, it prevents the application from being crashed if the key that we are trying to access is not present. If the key is not present then instead of a throwing key error, it returns `undefined`.


## Q: What is `Shimmer UI`?
A: A `Shimmer UI` resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what's about to come and what's happening (while UI currently loading) when a page full of content/data takes more than 3 - 5 seconds to load.
Shimmer UI is a great way for loading the applications. Instead of showing a loading circle we can design a shimmer UI for our application that is good for user experience.


## Q: What is the difference between `JS expression and JS statement`?
A: A JS expression returns a value that we use in the application. for example:

1 + 2 // expresses 
"foo".toUpperCase() // expresses 'FOO'
console.log(2) // logs '2'
isTrue ? true : false // returns us a true or false value based on isTrue value
A JS statement, does not return a value. for example:

let x; // variable declaration
if () { } // if condition
If we want to use JS expression in JSX, we have to wrap in {/* expression slot */} and if we want to use JS statement in JSX, we have to wrap in {(/* statement slot */)};

So a `statement` is an instruction unit telling computer what to DO. `for statement, while statement, if statement`, they are all actions, in another word tasks, or behaviors.

But for `expression`, we are talking about values, valuables, objects, or some procedures that can produce a value, like function.

1 + 2
(2 + 3) * 5 === 25
new Foo()

So Javascript also has `function expression`. Because function is a value. In the following code,

- The entire snippet is a statement.
- Everything after = is an expression.
- return width * height; is nested statement.
- width * height is an expression.

const rectArea = function(width, height) {
  return width * height;
};

## Q: What is `Conditional Rendering`? explain with a code example.
A: Rendering the data on the basis of the condition is called conditional rendering. `Conditional rendering` in React works the same way as conditions work in `JavaScript`. Use JavaScript operators like `if` or the `conditional operator` to create elements representing the current state, and React update the UI to match them. for example:
```
// Using Ternary operator as a shorthand way or writing an if-else statement
{isLoggedIn ? (return <UserGreeting />) : (return <GuestGreeting />)};
// Using an if…else Statement
{
  (if (isLoggedIn) {
    return <UserGreeting />;
  }else {
    return <GuestGreeting />;
  })
}
// Using Logical &&
{isLoggedIn && <button>Logout</button>}

## Q: What is `CORS`?
A: Cross-origin resource sharing (CORS) is a mechanism for integrating applications. CORS defines a way for client web applications that are loaded in one domain to interact with resources in a different domain.
CORS provides a number of benefits: It allows browsers to enforce the same-origin policy, which is a security measure that prevents a malicious script from accessing resources that it should not have access. It allows restricted resources on a web page to be requested from another domain.

## Q: What is `async and await`?
A: `Async`: It simply allows us to write promises-based code. The async keyword is used to declare an asynchronous function, which is a function that returns a promise and can be awaited. Asynchronous functions are used to perform long-running tasks in the background, such as making network requests or reading from a file, without blocking the main thread of execution.
`Await`: Await function is used to wait for the promise. It could be used within the `async` block only. It makes the code wait until the promise returns a result. It only makes the async block wait.
The await keyword is used inside an asynchronous function to pause the execution of the function until a promise is resolved. It allows you to write asynchronous code in a synchronous-like style, making it easier to read and write. Using async and await makes it easy to write asynchronous code that is simple and easy to understand, 
for example: 
```
// async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    const data = await fetch(
      "Swiggy_API_URL"
    );
    const json = await data.json();
    // we get the Swiggy API data in json format
    console.log(json);
  }
```

## Q: What is the use of `const json = await data.json()`; in `getRestaurants()`?
A: The `response` object, returned by the `await fetch()`, does not directly return the JSON response body but instead returns a promise that resolves with a Response object..
The Response object, in turn, does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the `json()` method, which returns a second promise that resolves with the result of parsing the response body text as JSON. For this we have used `await` keyword. so `data.json()` returns a promise resolved to a `JSON object`.