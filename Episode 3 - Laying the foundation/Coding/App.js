import React from "react"; /*import react package from the node_modules folder */
import ReactDOM from "react-dom/client"; /*import react-dom package from the node_modules folder */

// React element
const heading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

// React Functional Component => all below are valid functional components

const Headingcomponent1 = () => {
  // return statement with curly parenthesis
  return <h1>Namaste react Functional Component</h1>;
};
const Headingcomponent2 = () => <h1>Namaste react Functional Component</h1>; // single statement you can skip return

const num = 10000;

const Title = () => (
  // javascript code can inject into jsx using curly parenthesis for eg: num
  <h1 className="head" tabIndex="3">
    <p>{num}</p>
    <p>{100 + 200}</p>
    Namaste React using JSX
  </h1>
);

// Component composition means calling one functional component inside another functional component
const Headingcomponent3 = () => (
  // multiple statements wrap it into parentheses
  <div id="container">
    {Title()}{" "}
    {/*you can call the functional component like this also becoz at last it is javacsript function*/}
    <Title></Title>
    <Title />
    <h3>Namaste react Functional Component</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomponent3 />); // in this way u render react Functional component self closing tag
