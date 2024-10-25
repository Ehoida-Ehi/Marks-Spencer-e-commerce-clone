import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const base_url = "http://ecommerce.reworkstaging.name.ng/v2";

const Details = () => {
  const [productDetail, setProductDetail] = useState(null); // Start with null for loading state
  const { id } = useParams();
  const { addCartItem } = useContext(CartContext);

  // Accordion and modal related hooks and handlers
  const [hovered, setHovered] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);

  // Fetch product details based on the ID
  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const res = await axios.get(`${base_url}/products/${id}`);
        setProductDetail(res.data); // Set the product details from the response
      } catch (error) {
        console.error('Error fetching single product data:', error);
      }
    };
    fetchSingleProduct(); // Call the function to fetch product
  }, [id]);

  // If productDetail is still loading, show a loading state or message
  if (!productDetail) {
    return <div className="text-center">Loading product details...</div>;
  }

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    return (
      <span className="text-yellow-500">
        {"★".repeat(fullStars)}
        {halfStars ? "★" : ""}
        {"☆".repeat(5 - fullStars - halfStars)}
      </span>
    );
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };
 
  const addedtocart =() =>{
    const  data = {
        "product_id": id,
        "quantity": 1,
        has_variation: false,
        user_id: JSON.parse(localStorage.getItem("user_details")).id
    }

    // console.log(data)
    addCartItem(data)
  }
    return (
        <div className="container mx-auto">
            <div className="container mx-auto pl-4 p-1">
                <nav className="text-sm text-black semi-bold mb-4">
                    <ol className="list-reset flex">
                        <li>
                            <a href="#" className="hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <span className="mx-2">/</span>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Gifts
                            </a>
                        </li>
                        <li>
                            <span className="mx-2">/</span>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Food & Drink Gifts
                            </a>
                        </li>
                        <li>
                            <span className="mx-2">/</span>
                        </li>
                        <li className="text-gray-600">Fruit Baskets</li>
                    </ol>
                </nav>
            </div>
            <div className="relative h-auto max-w-7xl mx-auto py-4 px-4">
      {/* Outer Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        {/* Left Grid: Vertically Stacked Images */}
        <div className="flex flex-col gap-6 h-full overflow-y-scroll pr-4 no-scrollbar">
          {/* Top Image (Product Image) */}
          <img
            className="w-full h-auto"
            src={productDetail.images}
            alt={productDetail.title}
          />

          {/* Bottom Image (Hover Image) */}
          <img
            className="w-full h-auto"
            src={productDetail.images}
            alt={productDetail.title}
          />
        </div>

        {/* Right Grid: Fixed Text Details */}
        <div className="sticky top-0 self-start">
          <h2 className="text-2xl font-bold mb-4">{productDetail.title}</h2>
          <p className="text-gray-500 mb-4">Product Code: #{productDetail.id}</p>

          {/* Star Reviews */}
          <div className="flex items-center mb-4">
            {renderStars(productDetail.rating)}
            <span className="ml-2 text-gray-600 underline"></span>
          </div>

          {/* Price */}
          <p className="text-2xl text-red-600 font-semibold mb-6">${productDetail.price}</p>

          {/* Text Area for Message */}
          <label htmlFor="message" className="block mb-2">Add a gift Message:</label>
          <p className="mb-2">200 characters left</p>
          <textarea
            id="message"
            placeholder="Write your message here..."
            className="w-full p-3 border border-gray-300 rounded-md mb-4 resize-none"
          />

          {/* Select Input for Quantity */}
          <label htmlFor="quantity" className="block mb-2">Quantity:</label>
          <select
            id="quantity"
            className="w-24 p-2 border border-gray-300 rounded-md mb-6"
          >
            {[...Array(20).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>

          {/* Add to Bag Button */}
          <button onClick={() => addedtocart()} className="bg-black text-white px-6 py-2 mb-6 transition-all">
            Add to Cart
          </button>
          
          {/* <button className="bg-black w-full text-white py-2 px-6 mb-6 transition-all">
            Add to Bag
          </button> */}


          {/* Product Description */}
          <div className="mb-4">
            <p>{productDetail.descp}</p>
          </div>

          {/* Product Details Accordion */}
          <div className="accordion">
            <h3
              className="bg-gray-200 p-4 cursor-pointer border-b border-gray-300"
              onClick={() => toggleAccordion(1)}
            >
              Product Details
              <span
                className={`float-right transition-transform ${activeAccordion === 1 ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </h3>
            {activeAccordion === 1 && (
              <div className="p-4 border border-gray-300">
                <p>Details about the product.</p>
              </div>
            )}
          </div>

          {/* Delivery Accordion */}
          <div className="accordion">
            <h3
              className="bg-gray-200 p-4 cursor-pointer border-b border-gray-300"
              onClick={() => toggleAccordion(2)}
            >
              Delivery
              <span
                className={`float-right transition-transform ${activeAccordion === 2 ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </h3>
            {activeAccordion === 2 && (
              <div className="p-4 border border-gray-300">
                <p>Information about delivery options.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

          {/* REVIEW PART */}

            <div className='bg-[#f5f5f5] border p-4 m-[auto] mt-10 w-[90%] h-[1500px]'>
                <div className="p-6 bg-gray-100">
                    {/* Reviews Heading */}
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-3xl font-bold">Reviews (1273)</h1>
                    </div>


                    {/* Grid container to place rating section and quality rating side by side */}
                    <div className="grid grid-cols-2 gap-6">

                        {/* Rating Section */}
                        <div className="flex flex-col bg-white justify-between items-center  mb-6">
                            <div className="flex items-center mb-4">
                                <span className="text-3xl mt-4 font-semibold">4.4</span>
                                <div className="ml-2 mt-4 flex">
                                    {/* Black Stars for Rating */}
                                    <span className="text-black text-2xl">★</span>
                                    <span className="text-black text-2xl">★</span>
                                    <span className="text-black text-2xl">★</span>
                                    <span className="text-black text-2xl">★</span>
                                    <span className="text-black text-2xl">★</span>
                                </div>
                            </div>
                            <span className="text-gray-600 mb-4">66% Recommended this product</span>

                            {/* Write Review Button */}
                            <button
                                className="bg-transparent text-black font-semibold px-4 py-2 mb-10  rounded-md"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Write a Review
                            </button>

                            {/* Modal for Review Submission */}
                            {isModalOpen && (
                                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                                    <div className="bg-white p-6 rounded-lg relative w-96">
                                        {/* Close Button */}
                                        <button
                                            className="absolute top-2 right-2 text-gray-500"
                                            onClick={() => setIsModalOpen(false)}
                                        >
                                            ✖
                                        </button>

                                        {/* Modal Content */}
                                        <h2 className="text-xl font-bold mb-4">Share your thoughts</h2>

                                        <div className="mb-4">
                                            <h3 className="text-lg mb-2">Rate your experience</h3>
                                            {/* Star Rating */}
                                            <div className="flex">
                                                {[...Array(5)].map((_, index) => (
                                                    <span
                                                        key={index}
                                                        onClick={() => handleStarClick(index)}
                                                        className={`cursor-pointer text-2xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'
                                                            }`}
                                                    >
                                                        ★
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Text Area */}
                                        <textarea
                                            value={reviewText}
                                            onChange={(e) => setReviewText(e.target.value)}
                                            className="w-full p-2 border rounded-md mb-4"
                                            rows="4"
                                            placeholder="Write your review..."
                                        ></textarea>

                                        {/* Terms and Conditions Checkbox */}
                                        <div className="flex items-center mb-4">
                                            <input
                                                type="checkbox"
                                                checked={termsChecked}
                                                onChange={(e) => setTermsChecked(e.target.checked)}
                                                className="mr-2"
                                            />
                                            <span className="text-gray-600">I agree to the terms and conditions</span>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded-md float-right"
                                            disabled={!termsChecked || !reviewText || !rating}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quality Rating */}
                        <div className="flex flex-col bg-white justify-between">
                            <div className="mb-6">
                                <div className="flex justify-around mt-10 p-6 items-center">
                                    <span className="text-gray-600">Quality</span>
                                    <div className="w-3/4 bg-gray-200 rounded-full ">
                                        <div className="bg-gray-500 h-2 rounded-full "></div>
                                    </div>
                                    <span className="ml-2 text-gray-600">Excellent</span>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Mention Tags */}
                    <h2 className='font-semibold'>Mentions</h2>
                    <div className="flex flex-wrap gap-2 mt-4 mb-6">
                        {[
                            'satisfaction', 'purchase', 'freshness', 'quality',
                            'for gift', 'appearance', 'price', 'delicious',
                            'value', 'disappointing'
                        ].map((mention, index) => (
                            <span
                                key={index}
                                className="bg-white text-gray-800 px-3 py-1  text-sm"
                            >
                                {mention}
                            </span>
                        ))}
                    </div>

                    {/* Rating Filter */}
                    <div className="flex gap-4">
                        <select className="border w-60 p-2  text-gray-700">
                            <option>All ratings</option>
                            <option>5 stars</option>
                            <option>4 stars</option>
                            <option>3 stars</option>
                            <option>2 stars</option>
                            <option>1 star</option>
                        </select>

                        <select className="border p-2 w-60 text-gray-700">
                            <option>Most Recent</option>
                            <option>Most Helpful</option>
                        </select>
                    </div>
                </div>


                <div className="grid mt-20px mb-4 bg-white grid-cols-3 gap-4">

                    {/* Left Section */}
                    <div className='mt-10 pl-10' >
                        <p className="text-sm text-gray-500 mb-2">30 September 2024</p>
                        <p className="font-bold text-lg mb-2">Eye28</p>
                        <p className="text-sm text-gray-500">VERIFIED PURCHASE</p>
                    </div>

                    {/* Middle Section */}
                    <div className="mb-10  col-span-2">
                        {/* Reviewer Ratings */}
                        <div className="text-right mt-10 pr-10 ">
                            <p className="text-sm font-semibold mb-2">Reviewer Ratings</p>
                            <p className="text-sm font-semibold mb-2"> Quality Excellent </p>
                            <p className="text-sm text-gray-700">
                                Value for Money <span className="font-bold"></span>
                            </p>
                        </div>

                        {/* Review Section */}
                        <div>
                            {/* Star Ratings */}
                            <div className="flex items-center space-x-1 mt-[-65px]">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-black">
                                        <path d="M12 17.75L6.6 20.58l1-5.92L3 9.92l5.96-.86L12 3.75l2.04 5.31 5.96.86-4.6 4.74 1 5.92z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="mt-2 text-lg font-semibold">Excellent. Easy to order and lovely fruit.</p>
                            {/* Recommendation */}
                            <div className="flex items-center mt-2">
                                <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-3.293a1 1 0 011.415 0l3-3a1 1 0 10-1.415-1.415L10 12.586 8.293 10.88a1 1 0 00-1.415 1.415l3 3z" clipRule="evenodd" />
                                </svg>
                                <p className="ml-2 text-sm text-gray-700">Yes, I recommend this</p>
                            </div>
                            <p className="mt-2 text-gray-700">Bought for my daughter as a little surprise treat. She was very pleased.</p>
                            {/* Read More */}
                            <p className="mt-2 text-blue-600 cursor-pointer hover:underline">Read more</p>
                        </div>

                        {/* Helpful Section */}
                        <div className="flex items-center mt-4">
                            <p className="text-gray-500">Helpful?</p>
                            <button className="ml-2 flex items-center text-gray-600">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 10h10a1 1 0 100-2H5a1 1 0 100 2z" />
                                </svg>
                                <span className="ml-1">0</span>
                            </button>
                            <button className="ml-2 flex items-center text-gray-600">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M15 10H5a1 1 0 100 2h10a1 1 0 100-2z" />
                                </svg>
                                <span className="ml-1">0</span>
                            </button>
                            <p className="ml-4 text-blue-600 cursor-pointer hover:underline">Report Review</p>
                        </div>
                    </div>

                </div>

                <div className="grid mt-20px mb-4 bg-white grid-cols-3 gap-4">

                    {/* Left Section */}
                    <div className='mt-10 pl-10' >
                        <p className="text-sm text-gray-500 mb-2">30 September 2024</p>
                        <p className="font-bold text-lg mb-2">DIESEL P</p>
                        <p className="text-sm text-gray-500">VERIFIED PURCHASE</p>
                    </div>

                    {/* Middle Section */}
                    <div className="mb-10  col-span-2">
                        {/* Reviewer Ratings */}
                        <div className="text-right mt-10 pr-10 ">
                            <p className="text-sm font-semibold mb-2">Reviewer Ratings</p>
                            <p className="text-sm font-semibold mb-2"> Quality Excellent </p>
                            <p className="text-sm text-gray-700">
                                Value for Money <span className="font-bold"></span>
                            </p>
                        </div>

                        {/* Review Section */}
                        <div>
                            {/* Star Ratings */}
                            <div className="flex items-center space-x-1 mt-[-55px]">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-black">
                                        <path d="M12 17.75L6.6 20.58l1-5.92L3 9.92l5.96-.86L12 3.75l2.04 5.31 5.96.86-4.6 4.74 1 5.92z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="mt-2 text-lg font-semibold">Excellent. Easy to order and lovely fruit.</p>
                            {/* Recommendation */}
                            <div className="flex items-center mt-2">
                                <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-3.293a1 1 0 011.415 0l3-3a1 1 0 10-1.415-1.415L10 12.586 8.293 10.88a1 1 0 00-1.415 1.415l3 3z" clipRule="evenodd" />
                                </svg>
                                <p className="ml-2 text-sm text-gray-700">Yes, I recommend this</p>
                            </div>
                            <p className="mt-2 text-gray-700">Bought for my daughter as a little surprise treat. She was very pleased.</p>
                            {/* Read More */}
                            <p className="mt-2 text-blue-600 cursor-pointer hover:underline">Read more</p>
                        </div>

                        {/* Helpful Section */}
                        <div className="flex items-center mt-4">
                            <p className="text-gray-500">Helpful?</p>
                            <button className="ml-2 flex items-center text-gray-600">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 10h10a1 1 0 100-2H5a1 1 0 100 2z" />
                                </svg>
                                <span className="ml-1">0</span>
                            </button>
                            <button className="ml-2 flex items-center text-gray-600">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M15 10H5a1 1 0 100 2h10a1 1 0 100-2z" />
                                </svg>
                                <span className="ml-1">0</span>
                            </button>
                            <p className="ml-4 text-blue-600 cursor-pointer hover:underline">Report Review</p>
                        </div>
                    </div>

                </div>

                <div className="grid mt-20px bg-white grid-cols-3 gap-4">

                    {/* Left Section */}
                    <div className='mt-10 pl-10' >
                        <p className="text-sm text-gray-500 mb-2">30 September 2024</p>
                        <p className="font-bold text-lg mb-2">Eye28</p>
                        <p className="text-sm text-gray-500">VERIFIED PURCHASE</p>
                    </div>

                    {/* Middle Section */}
                    <div className="mb-10  col-span-2">
                        {/* Reviewer Ratings */}
                        <div className="text-right mt-10 pr-10 ">
                            <p className="text-sm font-semibold mb-2">Reviewer Ratings</p>
                            <p className="text-sm font-semibold mb-2"> Quality Excellent </p>
                            <p className="text-sm text-gray-700">
                                Value for Money <span className="font-bold"></span>
                            </p>
                        </div>

                        {/* Review Section */}
                        <div>
                            {/* Star Ratings */}
                            <div className="flex items-center space-x-1 mt-[-65px]">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-black">
                                        <path d="M12 17.75L6.6 20.58l1-5.92L3 9.92l5.96-.86L12 3.75l2.04 5.31 5.96.86-4.6 4.74 1 5.92z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="mt-2 text-lg font-semibold">Excellent. Easy to order and lovely fruit.</p>
                            {/* Recommendation */}
                            <div className="flex items-center mt-2">
                                <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-3.293a1 1 0 011.415 0l3-3a1 1 0 10-1.415-1.415L10 12.586 8.293 10.88a1 1 0 00-1.415 1.415l3 3z" clipRule="evenodd" />
                                </svg>
                                <p className="ml-2 text-sm text-gray-700">Yes, I recommend this</p>
                            </div>
                            <p className="mt-2 text-gray-700">Bought for my daughter as a little surprise treat. She was very pleased.</p>
                            {/* Read More */}
                            <p className="mt-2 text-blue-600 cursor-pointer hover:underline">Read more</p>
                        </div>

                        {/* Helpful Section */}
                        <div className="flex items-center mt-4">
                            <p className="text-gray-500">Helpful?</p>
                            <button className="ml-2 flex items-center text-gray-600">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 10h10a1 1 0 100-2H5a1 1 0 100 2z" />
                                </svg>
                                <span className="ml-1">0</span>
                            </button>
                            <button className="ml-2 flex items-center text-gray-600">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M15 10H5a1 1 0 100 2h10a1 1 0 100-2z" />
                                </svg>
                                <span className="ml-1">0</span>
                            </button>
                            <p className="ml-4 text-blue-600 cursor-pointer hover:underline">Report Review</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Details;








