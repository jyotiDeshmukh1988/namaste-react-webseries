import { useState, useEffect } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  useEffect(() => {
   /* const timer = setInterval(() =>{
        console.log("namaste react timer");
    },1000);*/
    console.log("use effect");
    return () => { // unmounting phase
      // useEffect return function called the cleanup function where we clean all our intervals and timeout variables
      /*clearInterval(timer);*/
      console.log("called after unmount");
    };
  },[]);
  console.log("render");
  return (
    <div className="user-card">
      <h1>{count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: jyotibarasker@gmail.com</h4>
    </div>
  );
};

export default User;
