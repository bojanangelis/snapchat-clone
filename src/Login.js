import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/appSlice";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          login({
            username: result.user.displayName,
            profilePic: result.user.photoURL,
            id: result.user.uid,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.cnet.com/a/img/vPQ6wXBVtvugeSw0hNtf6cD2KcU=/940x0/2014/07/15/eb361e4a-4cdc-4c22-9651-8d26406fb487/Snapchat-Logo.jpg"
          alt="snapchat"
        />
        <Button variant="outlined" onClick={signIn}>
          {" "}
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Login;
