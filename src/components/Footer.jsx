import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {


  return (
    <footer className=" h-screen ">

      {/* Signup form */}
      <div className="mt-12 mb-10 text-center">
        <h3 className="text-xl font-bold">Don't miss out</h3>
        <h5 className="mt-4 text-lg">
          Register to receive exclusive offers tailored to you, plus rewards and promotions <br /> before anyone else. Just select 'YES' on the next page and never miss a thing.
        </h5>
        <div className="mt-6 gap-4 flex justify-center">
          <input
            type="email"
            placeholder=" Enter your email address"
            className=" font-semibold text-[18px] border border-gray-300 px-4 py-4 w-[500px] focus:outline-none focus:ring focus:ring-gray-200"
          />
          <button className="bg-black text-white px-6 py-2 text-md font-semibold  hover:bg-gray-800 transition duration-300">
            Sign me up
          </button>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className=" bg-gray-50 container mx-auto ">
        {/* Headings */}
        <div className="flex justify-around items-center text-center mb-6">
          <h2 className="font-semibold text-2xl mt-20 mb-10">Ways to Pay</h2>
          <h2 className="font-semibold text-2xl mt-20 mb-10">Spread The Cost</h2>
        </div>

        {/* Ways to Pay Section */}
        <div className="flex justify-between items-start gap-6">
          <div className="border-r-[2px]  pr-10">
            <div className="flex justify-center items-center pl-14 gap-6 mb-4">
              <img src="https://images.ctfassets.net/prxuf37q3ta2/6C47mtIIh3PjSyTlYy9ZoL/762e25384fcac8563b8e1c8159e6a299/1220_02072024_Payment_Cards" alt="VISA" className="h-5" />
              <img src="https://images.ctfassets.net/prxuf37q3ta2/hsd59tiLdV8P5WA6imR8s/ee5403867d583044017b7ccaafe366dd/visa-1_1_.svg" alt="MasterCard" className="h-5" />
              <img src="https://images.ctfassets.net/prxuf37q3ta2/7utLx9dnXdIB9bp2USwYxI/8aa7a7f037dd4d8ad3459941e58172ca/Mastercard.svg" alt="American Express" className="h-5" />
              <img src="https://images.ctfassets.net/prxuf37q3ta2/6CogZIStCcMLfOt1TlWdoC/cdd4feea117ae318a6b96158026014a1/amex_1_.svg" alt="Apple Pay" className="h-5" />
              <img src="https://images.ctfassets.net/prxuf37q3ta2/7ylG0PVPmdKrQzi9Ixjgik/408af9af5a4d58df0d65995cc997a958/Apple_Pay" alt="payp" className="h-5" />
              <img src="https://images.ctfassets.net/prxuf37q3ta2/6aQbB8n6sQKXUubVV8y9zD/dcf4ea4be61850d39b14b900cbc5438a/Paypal.svg" alt="PayPal" className="h-5" />
            </div>
          </div>

          {/* Spread the Cost Section */}
          <div className="pl-6">
            <div className="flex justify-center items-center pr-10 gap-6">
              <div className="flex gap-2 items-center ">
                <img src="https://images.ctfassets.net/prxuf37q3ta2/5XY2cV5pFbzm5grSkghHAR/0921d08b13bcbaf8074ff2724184d193/M_SCreditCard" alt="M&S Credit Card" className="h-10 border-2 border-solid w-28 hover:shadow-md hover:scale-105 transition-transform " />
              </div>
              <div className="flex gap-2 items-center">
                <img src="https://images.ctfassets.net/prxuf37q3ta2/1lkZIIXkbZ91hDCLNuN4ov/ad8dae02ff543d35951254e49cbf4f02/SparksPay.svg" alt="ClearPay" className="h-10 border-2 border-solid w-28 hover:shadow-md hover:scale-105 transition-transform  " />
              </div>
              <div className="flex gap-2 items-center">
                <img src="https://images.ctfassets.net/prxuf37q3ta2/soTxuf8oq5R0sBHidg8VF/42ccdd55316ab87e09fc570e27fd7f97/clearpay-flout-logo-new.svg" alt="Pay in 3" className="h-10 border-2 border-solid w-28 hover:shadow-md hover:scale-105 transition-transform " />
              </div>
              <div className="flex gap-2 items-center">
                <img src="https://images.ctfassets.net/prxuf37q3ta2/4mH2mdwFsgkUAe4ZcRGKdk/1c776fad92051ebfd323202a1c8e13e1/12-01-2020-IFL-Logo.svg" alt="Pay in 3" className="h-10 border-2 border-solid w-28 hover:shadow-md hover:scale-105 transition-transform " />
              </div>
              <div className="flex gap-2 items-center">
                <img src="https://images.ctfassets.net/prxuf37q3ta2/4rvY2eVMyPkXWYWyfJLbXE/0d48d5911ab3f972bd10624d1cfa0af8/02112020-1445-pay-in-3-paypal-logo.svg" alt="Pay in 3" className="h-10 border-2 border-solid w-28 hover:shadow-md hover:scale-105 transition-transform " />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="bg-gray-50 py-6 px-10">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Here to Help */}
          <div className='px-14'>
            <h3 className="font-semibold text-xl mt-4 mb-4">Here to Help</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">Help & contact us</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">Our stores</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">Accessibility in our stores</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">Product recalls</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">Site map</a>
              </li>
            </ul>
          </div>

          {/* Delivery & Returns */}
          <div>
            <h3 className="font-semibold text-xl mt-4 mb-4">Delivery & Returns</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">Where's my order?</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">Delivery & collection</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">Guest Order Tracking</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">Guest order return</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">Returns & refunds</a>
              </li>
            </ul>
          </div>

          {/* Shopping with Us */}
          <div>
            <h3 className="font-semibold text-xl mt-4 mb-4">Shopping with Us</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">Sparks</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">Sparks FAQs</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">Gift card balance</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">Size guides</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">Sustainability</a>
              </li>
            </ul>
          </div>

          {/* More from M&S */}
          <div>
            <h3 className="font-semibold text-xl mt-4 mb-4">More from M&S</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">Ocado</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">Corporate site</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">M&S Corporate Gifts</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">M&S Bank</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">M&S Opticians</a>
              </li>
              <li className="mb-2">
                <a href="/" className="hover:underline">Careers</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-black h-56'>
        <div className='flex justify-center items-center h-[120px] border-b-2 max-w-6xl mx-auto gap-28'>
          <div className='flex justify-center items-center  gap-8 hover:cursor-pointer'>
            <img src='https://images.ctfassets.net/prxuf37q3ta2/6dq8gjjIVpB1DRdbkIqTV0/b429531635c3a7073d5aea9ddbda8fd3/Facebook-hover.svg' />
            <img src='https://images.ctfassets.net/prxuf37q3ta2/7gVzz0XIU87pXb7AOWFG2y/73c34cf81846bf458ad7fb83e95a0dfa/Twitter.svg' />
            <img src='https://images.ctfassets.net/prxuf37q3ta2/74Gs1LefphlMdlcIpdCysf/61d89564a13087ca7160aabf057fdc1b/Pintrest-hover.svg' />
            <img src='https://images.ctfassets.net/prxuf37q3ta2/2CRjGUhKicf0a3jRHsHMCQ/f0b5f49a323ca3098d3072a2b9bcc16e/Youtube-hover.svg' />
            <img src='https://images.ctfassets.net/prxuf37q3ta2/3CgMT6HdAfB0A1CHDb98KA/7c7ad1016c66c92bd95229dc3f701a2c/Instagram-hover.svg' />
          </div>
          <div className='gap-4 flex justify-center'> 
            <img src='https://images.ctfassets.net/prxuf37q3ta2/3rpUtgtonoCrv8PAUf7ytj/44ed2c688722f50d1f9f2c295fb25d06/App-Store.svg' />
            <img src='https://images.ctfassets.net/prxuf37q3ta2/6I7ZeDpWu8FChWR1jBsfFL/52bd9fadb3fe09c462d5479673eb76bb/GooglePlay-Store.svg' />
          </div>
        </div>
           <div>
              <div  className='flex justify-center mt-10 text-center gap-4  items-center'>

                <p className='text-white text-center'>&copy; 2024 Marks and Spencer plc(UK) &nbsp; |</p>
                <p className='text-white text-center'>Terms & Conditions &nbsp; |</p>
                <p className='text-white'> Privacy &nbsp; |</p>
                <p className='text-white'>Cookies &nbsp; |</p>
                <p className='text-white'>Manage cookies &nbsp; |</p>
                <p className='text-white'>Accessibility &nbsp; |</p>
                <p className='text-white'>Mordern Slavery Act </p>
              </div>
           </div>
      </div>
    </footer>


  )
}

export default Footer

