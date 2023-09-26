import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return <>
    <i className="fa fa-exclamation-triangle fa-5x" aria-hidden="true"></i>
    <p>Sorry, an unexpected error has occurred.</p>
      <h3>{error.status} : {error.statusText}</h3>
    </>
}

export default Error;