import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Auth/Login.css"; // Import CSS module
import { useDispatch } from "react-redux";
import { handleAddLoginData } from "../../Redux/action";

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    const { name, email, password, confirmPassword } = formData;
    const errors = {};

    // Name validation
    if (!name) {
      errors.name = "Name is required.";
    }

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

    // Confirm password validation
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required.";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match.";
    }

    setErrors(errors);

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(handleAddLoginData(formData));
      navigate("/login");
    }
  };

  const handleCutClick = () => {
    navigate("/"); // Redirect to homepage
  };

  return (
    <div
      style={{ height: "370px", maxWidth: "450px" }}
      className="login-container"
    >
      <div style={{margin:"auto",marginRight:"350px"}} className="cut-button" onClick={handleCutClick}>
        &#10005;
      </div>
      <h1 style={{fontSize:"larger", fontFamily:
              "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Enter your Name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <input
            placeholder="Enter your Email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <input
            placeholder="Enter your Password"
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <input
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <button
          style={{
            fontFamily:
              "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
          }}
          type="submit"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
