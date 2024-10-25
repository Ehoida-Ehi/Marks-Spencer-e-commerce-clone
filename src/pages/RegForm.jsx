import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegForm = () => {
  // Form state
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    receiveUpdates: false,
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    let formErrors = {};

    if (!formData.first_name) {
      formErrors.first_name = 'First name is required';
    }

    if (!formData.last_name) {
      formErrors.last_name = 'Last name is required';
    }

    if (!formData.email) {
      formErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }

    if (!formData.phone) {
      formErrors.phone = 'Phone number is required';
    } else if (!/^\d{11}$/.test(formData.phone)) {
      formErrors.phone = 'Phone number must be exactly 11 digits';
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      formErrors.password = 'Password must be at least 8 characters';
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
      const res = await axios.post(`${base_url}/users`, formData)
      if (res.data.msg){
        alert ('Error in userRegistration')
        return;
      }else{
        localStorage.setItem('user_regdetails', res.data);
        alert("Registration successful!");
        navigate('/SignIn')
      }
    } else {
      setErrors(validationErrors);
    }
  };
  

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="max-w-md mx-auto mt-[40px] p-6 bg-white">
      <h2 className="text-3xl font-bold mb-4">Let's get started</h2>
      <p className="mb-6">
        Enjoy faster checkout, digital receipts plus exclusive <br />
        Sparks offers, treats, and rewards.
      </p>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="mb-8">
          <label className="block font-semibold text-gray-700 mb-2" htmlFor="first_name">
            First name
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            id="first_name"
            name="first_name"
            className="w-full p-3 border border-gray-300"
            value={formData.first_name}
            onChange={handleChange}
          />
          {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name}</p>}
        </div>

        {/* Last Name */}
        <div className="mb-8">
          <label className="block font-semibold text-gray-700 mb-2" htmlFor="last_name">
            Last name(s)
          </label>
          <input
            type="text"
            placeholder="Enter your last name(s)"
            id="last_name"
            name="last_name"
            className="w-full p-3 border border-gray-300 "
            value={formData.last_name}
            onChange={handleChange}
          />
          {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name}</p>}
        </div>

        {/* Email Address */}
        <div className="mb-8">
          <label className="block font-semibold text-gray-700 mb-2" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            id="email"
            name="email"
            className="w-full p-3 border border-gray-300"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div className="mb-8">
          <label className="block font-semibold text-gray-700 mb-2" htmlFor="phone">
            Phone number
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            id="phone"
            name="phone"
            className="w-full p-3 border border-gray-300"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* Password */}
        <div className="mb-8">
          <label className="block font-md text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            placeholder="Create password"
            id="password"
            name="password"
            className="w-full p-3 border border-gray-300 "
            value={formData.password}
            onChange={handleChange}
          />
          <p>Min of 8 letters, 1 number & 1 special character</p>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        {/* Checkbox */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="receiveUpdates"
            name="receiveUpdates"
            className="mr-2"
            checked={formData.receiveUpdates}
            onChange={handleChange}
          />
          <label htmlFor="receiveUpdates" className="text-gray-700">
            I'd like to receive updates via email and/or text
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 mb-3 hover:bg-gray-800"
        >
          Create account
        </button>
      </form>
      <h2 className="mt-4 text-sm text-start">
        Already have an account?{' '}
        <Link to="/SignIn">
          Sign in <span>&rarr;</span>
        </Link>
      </h2>
    </div>
  );
};

export default RegForm;

