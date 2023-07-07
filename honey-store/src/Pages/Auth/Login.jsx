import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Auth/Login.css"; // Import CSS module
import { useSelector } from "react-redux";
// import LoginData from "../../db.json"

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginData } = useSelector((store) => store);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { email, password } = formData;
    const errors = {};

    // Email validation
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    // Password validation
    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password should be at least 6 characters long.";
    }

    setErrors(errors);

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Check if the email and password match a signup
      const signupData = loginData;

      const matchedSignup = signupData.find(
        (signup) =>
          signup.email === formData.email &&
          signup.password === formData.password
      );

      if (matchedSignup) {
        // Redirect to the homepage
        navigate("/");
      } else {
        // Handle invalid login credentials
        setErrors({ password: "Invalid email or password." });
      }
    }
  };

  const handleCutClick = () => {
    navigate("/signup"); // Redirect to homepage
  };

  return (
    <div className="login-container">
      <div style={{margin:"auto",marginRight:"310px",cursor:"pointer"}}  className="cut-button" onClick={handleCutClick}>
        &#10005;
      </div>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div  style={{marginBottom:"15px"}}>
          <input
            placeholder="Enter your Email"
            type="email"
            name="email"
            // required
            value={formData.email}
            onChange={handleInputChange}
          />
        <div>{errors.email && <span>{errors.email}</span>}</div>  
        </div >
        <div  style={{marginBottom:"15px"}}>
          <input
            placeholder="Enter your Password"
            type="password"
            name="password"
            // required
            value={formData.password}
            onChange={handleInputChange}
          />
         <div> {errors.password && <span>{errors.password}</span>}</div>
        </div>
        <button type="submit">PROCEED</button>
      </form>
     <Link to={"/signup"}>  <p id="a2" >Don't have an account so please Sign Up First</p></Link>

    </div>
  );
};

export default LoginPage;