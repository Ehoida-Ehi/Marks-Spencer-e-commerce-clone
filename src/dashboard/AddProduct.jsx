import React, { useState, useEffect } from "react";
import axios from "axios";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showProductForm, setShowProductForm] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("Marks & Spencer");
  const [quantity, setQuantity] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // New image URL field
  const [currency, setCurrency] = useState("");
  const [minQty, setMinQty] = useState("");
  const [maxQty, setMaxQty] = useState("");
  const [discount, setDiscount] = useState("");
  const [discountExp, setDiscountExp] = useState("");
  const [refund, setRefund] = useState(false);
  const [discountAvail, setDiscountAvail] = useState(false);
  const [shipping, setShipping] = useState(false);
  const [shippingLoc, setShippingLoc] = useState([]);
  const [merchantId, setMerchantId] = useState(""); // Merchant ID state
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling
  const [message, setMessage] = useState(""); // State for messages

  // Fetch categories from the API on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://ecommerce.reworkstaging.name.ng/v2/categories");
        const apiCategories = response.data; // Assuming response data is the list of categories

        // Get created categories from local storage and ensure it's an array
        const storedCategories = JSON.parse(localStorage.getItem("created_Category")) || [];
        const normalizedStoredCategories = Array.isArray(storedCategories) ? storedCategories : [storedCategories];

        const allCategories = [...apiCategories, ...normalizedStoredCategories]; // Combine API categories with local storage categories
        setCategories(allCategories); // Set the combined categories
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Failed to load categories");
      } finally {
        setLoading(false); // Ensure loading state is false after fetch attempt
      }
    };

    fetchCategories();
  }, []);

  // Fetch merchant ID from local storage
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

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setShowProductForm(e.target.value !== ""); // Show product form only when a category is selected
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      title,
      descp: desc,
      price,
      brand,
      quantity,
      images: [imageUrl], // Add image URL in an array
      currency,
      min_qty: minQty,
      max_qty: maxQty,
      discount,
      discount_expiration: discountExp,
      has_refund_policy: refund,
      has_discount: discountAvail,
      has_shipment: shipping,
      shipping_locations: shippingLoc,
      category_id: selectedCategory,
      merchant_id: merchantId, // Include merchantId in product data
    };

    try {
      const response = await axios.post(
        "http://ecommerce.reworkstaging.name.ng/v2/products",
        productData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      alert("product created successfully")
      resetForm(); // Reset form after successful submission
    } catch (error) {
      console.error("Error creating product:", error);
      setError("Error creating product. Please try again."); // Handle error state
    }
  };

  const resetForm = () => {
    setTitle("");
    setDesc("");
    setPrice("");
    setBrand("Marks &  Spencer");

    setQuantity("");
    setImageUrl(""); // Reset image URL
    setCurrency("");
    setMinQty("");
    setMaxQty("");
    setDiscount("");
    setDiscountExp("");
    setRefund(false);
    setDiscountAvail(false);
    setShipping(false);
    setShippingLoc([]);
    setSelectedCategory("");
    setShowProductForm(false);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg min-h-screen">
    <h2 className="text-xl font-bold mb-4">Create Product</h2>
  
    {loading && <p>Loading categories...</p>}
    {error && <p className="text-red-500">{error}</p>}
    {message && <p className="text-red-500">{message}</p>}
  
    <div className="mb-4">
      <label htmlFor="categorySelect" className="block text-sm font-medium text-gray-700">Select Category</label>
      <select
        id="categorySelect"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">Select a category</option>
        {categories?.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  
    {showProductForm && (
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Product</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* Title */}
          <div>
            <label htmlFor="productTitle" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="productTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
  
          {/* Description */}
          <div>
            <label htmlFor="productDesc" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="productDesc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="4"
              required
            />
          </div>
  
          {/* Price */}
          <div>
            <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              id="productPrice"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
  
          {/* Brand */}
          <div>
            <label htmlFor="productBrand" className="block text-sm font-medium text-gray-700">Brand</label>
            <input
              type="text"
              id="productBrand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="mt-1 block w-full py-2 pl-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
  
          {/* Quantity */}
          <div>
            <label htmlFor="productQuantity" className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              id="productQuantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
  
          {/* Image URL */}
          <div>
            <label htmlFor="productImageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              id="productImageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
  
          {/* Currency */}
          <div>
            <label htmlFor="productCurrency" className="block text-sm font-medium text-gray-700">Currency</label>
            <input
              type="text"
              id="productCurrency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
  
          {/* Minimum Quantity */}
          <div>
            <label htmlFor="productMinQty" className="block text-sm font-medium text-gray-700">Minimum Quantity</label>
            <input
              type="number"
              id="productMinQty"
              value={minQty}
              onChange={(e) => setMinQty(e.target.value)}
              className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
  
          {/* Maximum Quantity */}
          <div>
            <label htmlFor="productMaxQty" className="block text-sm font-medium text-gray-700">Maximum Quantity</label>
            <input
              type="number"
              id="productMaxQty"
              value={maxQty}
              onChange={(e) => setMaxQty(e.target.value)}
              className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
  
          {/* Discount */}
          <div>
            <label htmlFor="productDiscount" className="block text-sm font-medium text-gray-700">Discount</label>
            <input
              type="number"
              id="productDiscount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
  
          {/* Discount Expiration */}
          <div>
            <label htmlFor="productDiscountExp" className="block text-sm font-medium text-gray-700">Discount Expiration</label>
            <input
              type="date"
              id="productDiscountExp"
              value={discountExp}
              onChange={(e) => setDiscountExp(e.target.value)}
              className="mt-1 block w-full py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
  
          {/* Refund Policy */}
          <div className="col-span-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="productRefund"
                checked={refund}
                onChange={(e) => setRefund(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="productRefund" className="text-sm">Has Refund Policy</label>
            </div>
          </div>
  
          {/* Discount Available */}
          <div className="col-span-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="productDiscountAvailable"
                checked={discountAvail}
                onChange={(e) => setDiscountAvail(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="productDiscountAvailable" className="text-sm">Discount Available</label>
            </div>
          </div>
  
          {/* Shipping */}
          <div className="col-span-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="productShipping"
                checked={shipping}
                onChange={(e) => setShipping(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="productShipping" className="text-sm">Shipping</label>
            </div>
          </div>
  
          {/* Shipping Locations */}
          <div className="col-span-2">
            <label htmlFor="productShippingLoc" className="block text-sm font-medium text-gray-700">Selected Shipping Locations</label>
            <select
              id="productShippingLoc"
              multiple
              value={shippingLoc}
              onChange={(e) => setShippingLoc([...e.target.selectedOptions].map(option => option.value))}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="USA">Nigeria</option>
              <option value="Canada">Canada</option>
              <option value="UK">United  Kingdom</option>
              <option value="Australia">America</option>
              <option value="Germany">SouthAfrica</option>
            </select>
          </div>
  
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-600 text-black rounded-md hover:bg-pink-500"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    )}
  </div>
  
  );
};

export default AddProduct;

