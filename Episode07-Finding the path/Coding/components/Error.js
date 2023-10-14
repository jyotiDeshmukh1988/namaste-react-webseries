import { Link,useRouteError } from "react-router-dom";
import Errorimage from "../images/404error.jpg";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div className="error-page">
        <img src={Errorimage} alt="error" width="600"/>
        <h1>Oops! The restaurant you're looking for can't be found.</h1>
        <h3 className="error-data">{error.data}</h3>
        <h3 className="error-back-home">
          <Link to="/">Back Home</Link>
        </h3>
      </div>
    </>
  );
};

export default Error;
