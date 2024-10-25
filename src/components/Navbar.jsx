import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'; // Import Chevron icons
import { CartContext } from '../context/CartContext'

const Navbar = () => {
  const {cartItems} = useContext(CartContext)
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'Trending now',
    'What to wear this autumn',
    'More about the M&S credit card',
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  // State to manage the visibility of the mega menu
  const [isMegaMenuVisible, setMegaMenuVisible] = useState(false);

  // Function to toggle mega menu visibility
  const toggleMegaMenu = () => {
    setMegaMenuVisible(!isMegaMenuVisible);
  };

  return (
    <div className="font-sans">

      {/* Top Black Div Slider */}
      <div className="bg-black text-white p-4 relative">
        <div className="flex justify-between items-center">
          {/* Left spacing */}
          <div className="w-1/4"></div>

          {/* Slider at the center */}
          <div className="relative text-center w-2/4">
          <p className="hover:underline transition-all duration-200">
            {slides[currentSlide]}
          </p>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-xl"
          >
            <HiChevronLeft /> {/* Chevron Left Icon */}
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-xl"
          >
            <HiChevronRight /> {/* Chevron Right Icon */}
          </button>
        </div>

          {/* Help, Find Store, and British Flag on the right */}
          <div className="w-1/4 flex justify-end items-center space-x-4">
            <div className="border-r pr-4">
              <p>Help</p>
            </div>
            <div className="border-r pr-4">
              <p>Find a store</p>
            </div>
            <div>
              <img
                src="https://static.marksandspencer.com/icons/country-flags/UK.svg"
                alt="UK Flag"
                className="w-6 h-4"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Top bar with search and sign-in */}
      <div className="flex justify-between items-center py-4 px-6 bg-white">
        <div className="text-4xl font-bold">M&S</div>
        <div className="relative flex-grow mx-6 max-w-lg w-full">
          <input
            type="text"
            placeholder="Search product, code or brand"
            className="w-full px-4 py-2 border  border-gray-300 bg-[#f5f5f5] rounded"
            required
            onInvalid={(e) => e.target.setCustomValidity('Please fill out this field')}
            onInput={(e) => e.target.setCustomValidity('')}
          />
          <div className="absolute top-0 right-0 h-full bg-black flex items-center justify-center px-3">
            <span className="text-white text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg></span> {/* Search icon */}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link to='/SignIn'> 
                <span>Sign in</span>
          </Link>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
          </svg> {/* Heart icon */}
          <div className="relative">
            <Link to="/CartPage">
              <span className="text-2xl">&#128722;</span> {/* Cart icon */}
              <span className="absolute top-0 right-0 text-sm text-white bg-black rounded-full w-5 h-5 flex items-center justify-center">({cartItems && cartItems.length})</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className=" py-2 px-6">
        <div className="flex space-x-7 text-gray-800">
          <Link to="/" className="hover:underline">Women</Link>
          <Link to="/" className="hover:underline">Lingerie</Link>
          <Link to="/" className="hover:underline">Men</Link>
          <Link to="/" className="hover:underline">Kids</Link>
          <Link to="/" className="hover:underline">Baby</Link>
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/" className="hover:underline">Beauty</Link>
          <Link to="/" className="hover:underline">Brands</Link>
          <Link to="/" className="hover:underline">Flowers & Plants</Link>
          <span onClick={toggleMegaMenu} className="cursor-pointer hover:underline">Gifts</span>
          <Link to="/" className="hover:underline">Christmas</Link>
          <Link to="/" className="hover:underline">Food</Link>
          <Link to="/" className="hover:underline">Sale</Link>
          <Link to="/" className="hover:underline">Inspire Me</Link>
          <Link to="/" className="hover:underline">M&S Bank</Link>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-4 border-t border-gray-300 py-2">
        <p className="pr-4 border-r border-gray-300">
          Free delivery when you spend £60
        </p>
        <p className="pr-4 border-r border-gray-300">
          Free returns for online orders
        </p>
        <p>Free store collection</p>
      </div>

      {/* Mega menu section */}
      {isMegaMenuVisible && (
        <div className="flex justify-between px-6 py-8 bg-white space-x-8">
          {/* Categories */}
          <div className="grid grid-cols-4 gap-14 text-sm">
            <div>
              <h3 className="font-bold">Gifts by Recipient</h3>
              <ul>
                <li><Link to="/" className="hover:underline">Gifts for Her</Link></li>
                <li><Link to="/" className="hover:underline">Gifts for Him</Link></li>
                <li><Link to="/" className="hover:underline">Gifts for Kids</Link></li>
                <li><Link to="/" className="hover:underline">Baby Gifts</Link></li>
                <li><Link to="/" className="hover:underline">Gifts for Mums</Link></li>
                <li><Link to="/" className="hover:underline">Gifts for Dads</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Gifts by Occasion</h3>
              <ul>
                <li><Link to="/" className="hover:underline">Birthday Gifts</Link></li>
                <li><Link to="/" className="hover:underline">Anniversary Gifts</Link></li>
                <li><Link to="/" className="hover:underline">Christmas Gifts</Link></li>
                <li><Link to="/" className="hover:underline">Congratulations Gifts</Link></li>
                <li><Link to="/" className="hover:underline">Housewarming Gifts</Link></li>
                <li><Link to="/" className="hover:underline">Get Well Soon Gifts</Link></li>
                <li><Link to="/" className="hover:underline">Thank You Gifts</Link></li>
                <li><Link to="/" className="hover:underline">Halloween Gifts</Link></li>
              </ul>

              <h3 className="font-bold mt-6">Gift inspiration</h3>
              <ul>
                <li><Link to="/" className="hover:underline">Gift Wrap</Link></li>
                <li><Link to="/" className="hover:underline">Personalised Gifts</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Gifts by Price</h3>
              <ul>
                <li><Link to="/" className="hover:underline">Gifts Under £20</Link></li>
                <li><Link to="/" className="hover:underline">Gifts Under £30</Link></li>
                <li><Link to="/" className="hover:underline">Gifts Under £50</Link></li>
                <li><Link to="/" className="hover:underline">Luxury Gifts</Link></li>
              </ul>

              <h3 className="font-bold mt-6">Food & Drink Gifts</h3>
              <ul>
                <li><Link to="/" className="hover:underline">All Food & Drink Gifts</Link></li>
                <li><Link to="/" className="hover:underline">Afternoon Tea Gifts</Link></li>
                <li><Link to="/" className="hover:underline">Alcohol Gifts</Link></li>
                <li><Link to="/" className="hover:underline">Food Gifts</Link></li>
                <li><Link to="/Shop" className="hover:underline">Fruit Baskets</Link></li>
                <li><Link to="/" className="hover:underline">Hampers</Link></li>
                <li><Link to="/" className="hover:underline">Letterbox Gifts</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Gift Cards</h3>
              <ul>
                <li><Link to="/" className="hover:underline">E-Gift Cards</Link></li>
                <li><Link to="/" className="hover:underline">Gift Cards</Link></li>
                <li><Link to="/" className="hover:underline">Corporate Gifts</Link></li>
              </ul>
            </div>
          </div>

          {/* Right side images in 2-grid layout */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-left">
              <img src="https://images.ctfassets.net/prxuf37q3ta2/q6hdChArqhpgb41BlGhnY/ed0ee5ad71ddf2ab81255004d62edaea/SB-36530_giftsdlp_740x740-1.jpg?w=300&fm=webp" alt="Christmas Tree" className="w-40 h-40 mx-auto object-cover" />
              <h3 className="font-bold mt-4 ">Wow-worthy foodie gifts</h3>
              <p className="text-sm">Discover our gourmet gifts </p>
              <p className="text-sm">featuring the best of the </p>
              <p className="text-sm">M&S Foodhall, from just  £18</p>
              <p className="text-sm">and with free nominated- </p>
              <p className="text-sm mb-4">day delivery </p>


              <Link to="/" className="text-black underline ">Pick the perfect present</Link>
              <br />
              <Link to="/" className="text-black underline">Shop gifts with free delivery</Link>
            </div>
            <div className="text-left">
              <img src="https://images.ctfassets.net/prxuf37q3ta2/19IMPN1HQ97klMve9xo3Hv/cc0bdeac32af13b0a05ea39dac043572/Artboard_4_36809_740x740.jpg?w=300&fm=webp" alt="Family Pyjamas" className="w-40 h-40 mx-auto object-cover" />
              <h3 className="font-bold mt-4">Wonderful gifts that wont</h3>
              <h3 className="font-bold">break the bank</h3>
              <p className="text-sm">Make their day by sending</p>
              <p className="text-sm">gourment delights to their </p>
              <p className="text-sm">doorstep with free delivery</p>
              <p className="text-sm mb-2">across selected hampers</p>
              <Link to="/" className="text-black underline">Gifts under  £20</Link>
              <br />
              <Link to="/" className="text-black underline">Gifts under  £30</Link>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;














