import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  ReactDOM,
  useNavigate,
} from "react-router-dom";
import App from "../App";

const Landing = () => {
  const navigate = useNavigate();
  const nav = document.querySelector("nav")
  nav.classList.add("nav2")

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // App.setNav(false)

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    pass: "invalid username or password",
  };

  const removeNav = (event) => {
    event.preventDefault();

    App.setNav(false);
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (
        userData.password !== pass.value ||
        userData.username !== uname.value
      ) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "pass", message: errors.pass });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  const navigateToSignIn = () => {
    navigate('/signup')
  }

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <div className="title">Sign In</div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" placeholder="Username" required />
          <label>Password </label>
          <input type="password" name="pass" placeholder="Password" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div className="forgot">
          <Link>Forgot Password?</Link>
        </div>
      </form>
      <div className="button-container">
          <button className="SignUp" onClick={navigateToSignIn}>Sign Up</button>
        </div>
      </div>
  );


  const SignInInformation = (
    <div className="LeftHandWelcome">
      <label className="WelcomeTitle">Welcome to our website</label>
      <div className="LeftWelcomeInformation">
        <body>
          Whatever information we need to store in this place. We can talk
          colors later
        </body>
        <body>Talk a lil ish</body>
      </div>
    </div>
  );

  const TraverseToHomePage = (
    <div>
      <div>User is successfully logged in</div>
      <Link to="/home" className="LoginToHome">
        Go To Home Page.
      </Link>
    </div>
  );


  return (
    <div className="app">
      {SignInInformation}
      <div className="login-form">
        {isSubmitted ? TraverseToHomePage : renderForm}
      </div>
    </div>
  );
};

export default Landing;
