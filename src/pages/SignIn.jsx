import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  // Form state
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    let formErrors = {};

    if (!formData.email) {
      formErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
    }

    return formErrors;
  };

  const base_url =  'http://ecommerce.reworkstaging.name.ng/v2'
  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data:', formData);
      // Proceed with form submission (e.g., send data to API)
      const res = await axios.post(`${base_url}/users/login`, formData)
      // console.log('Response data:', res.data); // Log the response to inspect
      if (res.data.msg){
        alert('Error login')
        return;
      }else{
        localStorage.setItem('user_details', JSON.stringify(res.data));
        alert("Signin successful!");
          navigate('/')
      }
    } else {
      setErrors(validationErrors);
      
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-md mt-16 mx-auto p-6 bg-white">
      <h2 className="text-2xl font-bold mb-10">Sign in to your account</h2>
      <form onSubmit={handleSubmit}>
        {/* Email Address */}
        <div className="mb-8">
          <label className="block font-semibold text-gray-700 mb-2" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border border-gray-300 "
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-3 border border-gray-300"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        {/* Forgot Password */}
        <div className="mb-6">
          <a href="#" className=" text-sm underline hover:to-blue-500">
            Forgot your password?
          </a>
        </div>

        <div className="mb-6 flex text-[12px] ">
          <a href="#" className=" ">
            Your personal details are safe with us. 
            <a href='#' className='underline'>
             view our Customer Data Promise
            </a>
          </a>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full bg-[#dedede] text-white py-3  hover:bg-gray-800"
        >
          Sign In
        </button>
      </form>

      {/* Create Account */}
      <p className="mt-8 text-md text-start hover:text-blue-500">
        <Link to='/RegForm'>
              Create an account <span>&rarr;</span>
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
