import React, { useState } from 'react'
import "../CSS/LoginSignup.css"
import { useNavigate } from 'react-router-dom'

const LoginSignup = () => {
  const [state, setState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const login = async () => {
    if (!validateForm()) return;

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll just simulate a successful login
      console.log("Login successful", formData);
      navigate("/"); // Redirect to home page after successful login
    } catch (error) {
      console.error("Login failed:", error);
      setErrors({ submit: "Login failed. Please try again." });
    }
  };

  const signup = async () => {
    if (!validateForm()) return;

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll just simulate a successful signup
      console.log("Signup successful", formData);
      navigate("/"); // Redirect to home page after successful signup
    } catch (error) {
      console.error("Signup failed:", error);
      setErrors({ submit: "Signup failed. Please try again." });
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1 className='text-4xl font-bold mb-8'>{state}</h1>

        <div className="loginsignup-feilds">
          {state === "Sign Up" && (
            <div className="field-container">
              <input 
                type="text" 
                name="username"
                placeholder='Your Name'
                value={formData.username}
                onChange={changeHandler}
                className={errors.username ? 'error' : ''}
              />
              {errors.username && <span className="error-text">{errors.username}</span>}
            </div>
          )}
          
          <div className="field-container">
            <input 
              type="email" 
              name="email"
              placeholder='Enter Your Email'
              value={formData.email}
              onChange={changeHandler}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="field-container">
            <input 
              type="password" 
              name="password"
              placeholder='Password'
              value={formData.password}
              onChange={changeHandler}
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>
        </div>

        {errors.submit && <div className="error-message">{errors.submit}</div>}

        <button 
          onClick={state === "Login" ? login : signup}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          Continue
        </button>
        
        <p className="loginsignup-login">
          {state === "Sign Up" ? "Already have an account? " : "Don't have an account? "}
          <span onClick={() => setState(state === "Login" ? "Sign Up" : "Login")}>
            {state === "Login" ? "Sign Up" : "Login"}
          </span>
        </p>

        <div className="loginsignup-agree">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            By continuing, I agree to the Terms of Use & Privacy Policy.
          </label>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
