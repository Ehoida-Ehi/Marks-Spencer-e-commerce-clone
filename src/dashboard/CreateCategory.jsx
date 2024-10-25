import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = 'http://ecommerce.reworkstaging.name.ng/v2';

const CreateCategory = () => {
  const [merchantId, setMerchantId] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(true); // State to control form visibility

  // Fetch merchant_id from the stored object in local storage
  useEffect(() => {
    const storedMerchant = localStorage.getItem("merchant_details");
    if (storedMerchant) {
      try {
        const merchantObj = JSON.parse(storedMerchant); // Parse the JSON string
        if (merchantObj && merchantObj.id) {
          setMerchantId(merchantObj.id); // Extract the 'id' field
        } else {
          setMessage("Invalid merchant data in local storage.");
        }
      } catch (error) {
        console.error("Error parsing merchant data:", error);
        setMessage("Invalid merchant data in local storage.");
      }
    } else {
      setMessage("No merchant data found in local storage.");
    }
  }, []);

  const validateCategories = () => {
    // Basic validation to ensure name and image are not empty
    return name.trim() !== "" && image.trim() !== "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateCategories()) {
      const categoryData = {
        merchant_id: merchantId,
        name: name,
        image: image || "https://m.media-amazon.com/images/I/711ShZVkqcL._AC_SR768,1024__FMwebp_.jpg", // Default if empty
      };

      try {
        const response = await axios.post(
          `${BASE_URL}/categories`,
          categoryData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Check for both status 200 and 201 as successful
        if (response.status === 201 || response.status === 200) {
          setMessage("Category created successfully!");

          // Save the newly created category to local storage
          const createdCategory = {
            id: response.data.id,  // Assuming the category id is in the response
            name: response.data.name,
            image: response.data.image
          };

          // Save only the newly created category data into local storage
          localStorage.setItem("created_Category", JSON.stringify(createdCategory));

          // Reset form fields
          setName("");
          setImage("");

          // Clear the message after 3 seconds
          setTimeout(() => {
            setMessage("");
          }, 3000);
          
        } else {
          setMessage(`Failed to create category. Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error creating category:", error);
        if (error.response) {
          setMessage(`Error: ${error.response.data.message || "Failed to create category."}`);
        } else {
          setMessage("An error occurred while creating the category.");
        }
      }
    } else {
      setMessage("Please fill out all fields.");
    }
  };

  // Fetch categories for the merchant
  useEffect(() => {
    const getCategories = async () => {
      if (merchantId) { // Only fetch if merchantId is present
        try {
          const response = await fetch(`${BASE_URL}/categories?merchant_id=${merchantId}`);
          const data = await response.json();
          console.log('Merchant categories:', data);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      }
    };

    getCategories(); // Call the function inside useEffect
  }, [merchantId]); // Dependency on merchantId

  if (!isOpen) return null; // Don't render the form if isOpen is false

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md relative">
      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-black"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <h1 className="text-2xl font-bold mb-4 text-center">Create New Category</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Category Name
          </label>
          <input
            type="text"
            id="categoryName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter category name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="image">
            Category Image URL
          </label>
          <input
            type="text"
            id="categoryImage"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter image URL"
          />
          {image && (
            <img
              src={image}
              alt="Category"
              className="mt-2 h-20 w-20 object-cover"
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 text-black font-medium p-2 rounded-md hover:bg-pink-500 transition duration-200"
        >
          Create Category
        </button>
      </form>

      {message && (
        <div className={`mt-4 p-2 ${message.includes("successfully") ? "bg-green-500" : "bg-red-500"} text-white`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default CreateCategory;

