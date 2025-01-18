import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/newUser",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      console.log(data);

      const { success, message, verified } = data;
      if (success) {
        handleSuccess(message);
        console.log("User successfully registered. Navigating to verify-email...");
        setTimeout(() => {
          navigate("/verify-email", { state: { email } }); // Pass email to verify-email page
        }, 1000);
      } else if (verified == true) {
        setTimeout(() => {
          navigate("/login"); // Pass email to verify-email page
        }, 1000);
        handleError(message);
      } else {
        setTimeout(() => {
          navigate("/verify-email", { state: { email } }); // Pass email to verify-email page
        }, 1000);
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <>
      <div className="body">
        <div className="signup-container">
          <h1>Signup Account</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Enter your username"
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
              />
            </div>
            <button className="signup-button" type="submit">Submit</button>
            <div className="login-link">
              Already have an account? <Link to={"/login"}>Login</Link>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Signup;