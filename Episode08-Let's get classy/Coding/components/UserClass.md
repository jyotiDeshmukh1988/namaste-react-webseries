`` import React from "react";

## When loading a class component means are creating a new instance of that class
## instance of class returns object contains props, state, context and refs
``````
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // console.log(this.props);
    // console.log(this);
    // declare state variable all state variables defined here
    this.state = {
        count:0,
        count2:0,
    }
    console.log(this.props.name+" "+" Constructor");
  }

  componentDidMount(){
    console.log(this.props.name+" "+"Component Did Mount");
  }

  render() {
    const { name, location } = this.props;
    console.log(this.props.name+" "+"Render");
    return (
      <div className="user-card">
        <h1>{this.state.count}</h1>
        <button onClick={()=>{
            // never update directly using equal sign
            // this.state = this.state.count + 1
            this.setState({  // setState provided by React for updating the state variables
                count : this.state.count + 1,
                count2 : this.state.count2 + 2
            })
        }}>Increment Count</button>
        <h1>{this.state.count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: jyotibarasker@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

``````