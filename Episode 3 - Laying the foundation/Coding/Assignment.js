import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../Coding/logo.png";
// Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

//React.createElement

const header1 = React.createElement(
  "div",
  { class: "title" },
  [
    React.createElement("h1",{id:"h1"},"I am H1 tag"),
    React.createElement("h2",{id:"h2"},"I am H2 tag"),
    React.createElement("h3",{id:"h3"},"I am H3 tag")
  ]
);


// JSX
const header2 = (
    <div className="title">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
        <h3>I am h3 tag</h3>
    </div>
);

// functional component

const Headerfunctional = () =>(
    <div className="title">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
        <h3>I am h3 tag</h3>
    </div>
)


// Pass attributes into the tag in JSX

const HeaderfunctionalAttr = () =>(
    <div className="title">
        <h1 id="h1" style={{color:"red"}}>I am h1 tag</h1>
        <h2 id="h2" style={{color:"green"}}>I am h2 tag</h2>
        <h3 id="h3" style={{color:"blue"}}>I am h3 tag</h3>
    </div>
)


// React Composition Component

const TitleComponent = () => (
    <div className="title">
       <h1>I am a Header Component</h1>
    </div>
)

const HeaderComponent = () => {
    return <div className="header">
        <TitleComponent/>
        <TitleComponent></TitleComponent>
        <div className="logo">Logo</div>
        <div className="search"><input type="search"/></div>
        <div className="users">Users</div>
    </div>
}



/*
Q: Create a Header Component from scratch using Functional Component with JSX
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice
*/

const Header = () => {
    return <div className="header">
        <div className="logo"><img src={logo} alt="Go beyond and achieve success" width="120"/></div>
        <div className="search"><input type="search" className="form-control"/></div>
        <div className="users"><i className="fa fa-user fa-2x" aria-hidden="true"></i></div>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
