import React from "react";
import { GITHUB_USER_API } from "../utils/constants";
// When loading a class component means are creating a new instance of that class
// instance of class returns object contains props, state, context and refs

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);
    console.log("Child Constructor called");
    // declare state variable all state variables defined here
    this.state = {
      userInfo: {
        name: "Jyoti",
        location: "MP",
        company: "Freelancer",
        bio: "Web developer",
      },
    };
  }

  async componentDidMount() {
    // better place to call the api after component is mounted or rendered is completed
    console.log("child componentDidMount called");
    // github API call
   /* this.mytime = setInterval(() => {
      console.log("reading user namaste react..."); 
    },1000);*/

    try {
      const data = await fetch(GITHUB_USER_API);
      const json = await data.json();
      //console.log(json);
      this.setState({
        userInfo: json,
      });
      //console.log(json);
    } 
    catch (err) {
      console.log(err);
      this.state.userInfo = {};
    }
  }

  componentDidUpdate() {
    console.log("child componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("child componentWillUnmount called");
    /*clearInterval(this.mytime);*/
  }

  render() {
    console.log("child render() called");
    const { name, location, company, bio } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>Profile: {name}</h1>
        <h3>Location: {location}</h3>
        <h3>Company: {company}</h3>
        <h3>Bio: {bio}</h3>
      </div>
    );
  }
}

export default UserClass;

/**
 *
 * --- Mounting Phase---
 *
 * Constructor (dummy data)
 * Render (dummy data)
 *     <HTML DOM with dummy data>
 * Component Did Mount
 *     <API Call>
 *     <this.setState> -> State variable is updated
 *
 * --- Updating Phase ---
 *
 *     render (API data)
 *     HTML rendering with API data
 *     Component Did Update - called when component state variable is updated
 *
 * --- UnMounting Phase ---
 *     Component Unmount - called when router is changes means component is removed from the DOM
 *     https://www.geeksforgeeks.org/reactjs-componentdidupdate-method/
 **/
