import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MerchReg = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    store_name: '',
    descp: '',
    icon: '',
    banner: '',
    phones: '',
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

    if (!formData.phone || formData.phone.length !== 11) {
      formErrors.phone = 'Phone number must be 11 digits';
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      formErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.store_name) {
      formErrors.store_name = 'Store name is required';
    }

    if (!formData.descp) {
      formErrors.descp = 'Description is required';
    }

    if (!formData.icon) {
      formErrors.icon = 'Store icon is required';
    }

    if (!formData.banner) {
      formErrors.banner = 'Store banner is required';
    }

    return formErrors;
  };

  const base_url = 'http://ecommerce.reworkstaging.name.ng/v2';

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await axios.post(`${base_url}/merchants`, formData);
        if (res.data.msg) {
          alert('Error in Registration');
          return;
        } else {
          localStorage.setItem('merchant_regdetails', JSON.stringify(res.data));
          alert("Registration successful!");
          navigate('/MerchSign');
        }
      } catch (error) {
        console.error('Registration error:', error);
        alert('An error occurred during registration.');
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
        Enjoy faster checkout, digital receipts plus exclusive Sparks offers, treats and rewards.
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
            className="w-full p-3 border border-gray-300"
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
            Phone Number
          </label>
          <input
            type="text"
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
            className="w-full p-3 border border-gray-300"
            value={formData.password}
            onChange={handleChange}
          />
          <p>Min of 8 letters, 1 number & 1 special character</p>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        {/* Store Name */}
        <div className="mb-8">
          <label className="block font-semibold text-gray-700 mb-2" htmlFor="store_name">
            Store Name
          </label>
          <input
            type="text"
            placeholder="Enter your store name"
            id="store_name"
            name="store_name"
            className="w-full p-3 border border-gray-300"
            value={formData.store_name}
            onChange={handleChange}
          />
          {errors.store_name && <p className="text-red-500 text-sm">{errors.store_name}</p>}
        </div>

        {/* Description */}
        <div className="mb-8">
          <label className="block font-semibold text-gray-700 mb-2" htmlFor="descp">
            Description
          </label>
          <textarea
            placeholder="Enter store description"
            id="descp"
            name="descp"
            className="w-full p-3 border border-gray-300"
            value={formData.descp}
            onChange={handleChange}
          />
          {errors.descp && <p className="text-red-500 text-sm">{errors.descp}</p>}
        </div>

        {/* Icon */}
        <div className="mb-8">
          <label className="block font-semibold text-gray-700 mb-2" htmlFor="icon">
            Store Icon (URL)
          </label>
          <input
            type="url"
            id="icon"
            name="icon"
            className="w-full p-3 border border-gray-300"
            value={formData.icon}
            onChange={handleChange}
          />
          {errors.icon && <p className="text-red-500 text-sm">{errors.icon}</p>}
        </div>

        {/* Banner */}
        <div className="mb-8">
          <label className="block font-semibold text-gray-700 mb-2" htmlFor="banner">
            Store Banner (URL)
          </label>
          <input
            type="url"
            id="banner"
            name="banner"
            className="w-full p-3 border border-gray-300"
            value={formData.banner}
            onChange={handleChange}
          />
          {errors.banner && <p className="text-red-500 text-sm">{errors.banner}</p>}
        </div>

        {/* Receive Updates */}
        <div className="mb-6">
          <label className="block font-semibold text-gray-700 mb-2">
            <input
              type="checkbox"
              name="receiveUpdates"
              checked={formData.receiveUpdates}
              onChange={handleChange}
              className="mr-2"
            />
            Yes! I would like to receive information about promotions.
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4">
            Register
          </button>
        </div>

        {/* Sign In Link */}
        <div className="mt-4 text-center">
          Already have an account? <Link to="/signin" className="text-blue-500">Sign In</Link>
        </div>
      </form>
    </div>
  );
};

export default MerchReg;


