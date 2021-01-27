import React from "react";
import { Link } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialState = {
  username: "",
  password: "",
  isFetching: false /**We set the initial state to a blank string*/,
};

const Login = () => {
  const [login, setLogin] = useState(initialState);

  const handleChange = (event) => {
    event.preventDefault(); //prevent the page to reload
    setLogin({...login, isFetching: true })
  };

  const handleSubmit = (event) => { 
    event.preventDefault(); //prevent reload
    setLogin({...login, isFetching:true})
    axiosWithAuth()
      .post
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;
