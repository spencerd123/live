import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  ReactDOM,
} from "react-router-dom";

const SignUp = () => {

    const signUpFields = (
        <div className="SignUpContent">
        <header>Sign Up for NIL EEEE</header>
        <div className="FirstNameLabelSignUp">
          <label>Enter your first name.</label>
        </div>
        <div className="FirstNameTextBoxSignUp">
          <input
            type="text"
            name="FirstName"
            placeholder="First name"
            required
          ></input>
        </div>
        <div className="LastNameLabelSignUp">
          <label>Enter your last name.</label>
        </div>
        <div className="LastNameTextBoxSignUp">
          <input
            type="text"
            name="LastName"
            placeholder="Last name"
            required
          ></input>
        </div>
        <div className="UserNameLabelSignUp">
          <label>Create a username.</label>
        </div>
        <div className="UserNameTextBoxSignUp">
          <input
            type="text"
            name="Username"
            placeholder="Username"
            required
          ></input>
        </div>
        <div className="PasswordLabelSignUp">
          <label>Create a password.</label>
        </div>
        <div className="PasswordTextBoxSignUp">
          <input
            type="text"
            name="Password"
            placeholder="Password"
            required
          ></input>
        </div>
        <div className="GenderLabelSignUp">
          <label>Select your gender.</label>
        </div>
        <div>
          <select className="GenderDropDownSignUp">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="SportLabelSignUp">
          <label>Select your sport.</label>
        </div>
        <div>
          <select className="SportDropDownSignUp">
            <option value="Wrestling">Wrestling</option>
            <option value="Baseball">Baseball</option>
            <option value="Basketball">Basketball</option>
            <option value="Football">Football</option>
          </select>
        </div>
        <div className="ExperienceLabelSignUp">
          <label>What is your experience level?</label>
        </div>
        <div>
          <select className="ExperienceDropDownSignUp">
            <option value="Youth">Youth</option>
            <option value="High School">High School</option>
            <option value="College">College</option>
            <option value="Professional">Professional</option>
          </select>
        </div>
        <div>
            <button className="SubmitSignUp">Submit</button>
          </div>
      </div>
    ); 

  return (
    <div className="signUpNow">
      {signUpFields}
    </div>
  );
};

export default SignUp;
