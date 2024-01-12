import UserClass from "./UserClass";
import { Component } from "react";
import User from "./User";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  async componentDidMount() {
    // use for API call becoz it is called after the component is mounted
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent render method");
    return (
      <>
      <div className="container pt-24 mx-auto">
        <h1>Want to know more about me</h1>
        <h2>Please see the details below</h2>
        <UserClass name={"First Child"} location={"Pune"} />
        {/*<User/>*/}
        </div>
      </>
    );
  }
}

export default About;

/*
Liftcycle of the Parent and Child Components 
- Parent Constructor
- Parent Render
  - First Child Constructor
  - First Child Render
  - Second Child Constructor
  - Second Child Render
  - First Child ComponentDidMount
  - Second Child ComponentDidnmount
- Parent ComponentDidMount

On parent and child components React goes into two phases
1 - Render phase - React make the batch of all the child components by calling the render method.
2 - Commit phase - DOM is manipulation is costly so React after render phase completed make the batch of DOM of each children and using compare(Diff Algorithm) then update the DOM on commit phase in this way it optimize the child component.

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
*/
