import { useState, useRef } from 'react';
import './css/home.css';


const Home = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="font-sans">

      {/* new feature */}
      <div className="grid grid-cols-[2fr_3fr] min-h-screen">
        {/* Left Side Grid with Black Background */}
        <div className="bg-[#443c3a] flex flex-col justify-start items-left  p-10 relative">
          {/* Title and Description */}
          <div className="mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mt-10 text-white mb-4">Layer it on</h1>
            <p className="text-lg lg:text-xl text-white mb-4">Effortless ways to outwit the <br />weather</p>
            <button className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-100 transition duration-300">
              Women's new in &rarr;
            </button>
          </div>

          {/* Bottom Image Grid - Shifted to the Right */}
          <div className="absolute bottom-0 left-[40px] lg:transform lg:-translate-x-1/5 z-10 w-full lg:w-[120%] mb-16 grid grid-cols-3 gap-2">
            {/* Image 1 */}
            <div className="relative">
              <img
                src="https://images.ctfassets.net/prxuf37q3ta2/1vSGmWHsrFg5enuGBA0xcT/25616d7c31b1ae2f751cf0fabb8aabb8/DESKTOP_CAROUSEL_1b.jpg?w=1024"
                alt="Christmas Decoration 1"
                className="w-full object-cover"
              />
              <div className="bg-white text-black text-center">
                <p className="font-sm  hover:cursor-pointer hover:underline">Jackets</p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative">
              <img
                src="https://images.ctfassets.net/prxuf37q3ta2/2ZNlnsBjwUGesgDerPwzZS/cf77240df28a287b0facbc83df5ca072/DESKTOP_CAROUSEL_1d.jpg?w=1024"
                alt="Christmas Decoration 2"
                className="w-full object-cover"
              />
              <div className="bg-white text-black text-center ">
                <p className="font-sm hover:underline">Knitwear</p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative">
              <img
                src="https://images.ctfassets.net/prxuf37q3ta2/5CgOonlgO80BFfKNdN4Had/b19d07351d41df85a0534fd9552e1b96/DESKTOP_CAROUSEL_1c.jpg?w=1024"
                alt="Christmas Decoration 3"
                className="w-full object-cover"
              />
              <div className="bg-white text-black text-center">
                <p className="font-sm hover:cursor-pointer hover:underline">Dresses</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Grid with Video */}
        <div className="relative">
          <video
            ref={videoRef}
            src="https://videos.ctfassets.net/prxuf37q3ta2/1QteSPIbdpS4LdMxskhiaX/d846180fee8da6e0ea21566aabbf3c6b/Desktop_2022x1516.mp4"
            autoPlay
            muted
            loop
            className="object-cover w-full h-full"
          ></video>

          {/* Play/Pause Button */}
          <div className="absolute bottom-8 right-8">
            <button
              onClick={togglePlayPause}
              className="p-4 bg-white rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 9v6m4-6v6"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-6.64-3.72A1 1 0 007 8.25v7.5a1 1 0 001.512.858l6.64-3.72a1 1 0 000-1.716z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>


      {/* ends here */}

      <div className="grid grid-cols-[2fr_3fr] h-[100vh]">
        {/* Left Side Grid with Black Background */}
        <div className="bg-[#193444] flex flex-col justify-start items-center p-7 relative">
          {/* Title and Description */}
          <div className=" mb-12 mt-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">The next chapter</h1>
            <p className="text-lg lg:text-xl text-white">A new era of effortless, elevated</p>
            <p className="text-lg lg:text-xl text-white mb-4">pieces</p>
            <button className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-100 transition duration-300">
              Women's Jaeger &rarr;
            </button>
          </div>

          {/* Bottom Image Grid - Shifted to the Right */}
          <div className="absolute bottom-0 left-[40px] lg:transform lg:-translate-x-1/5 z-10 w-full lg:w-[120%] mb-20 grid grid-cols-3 gap-2">
            {/* Image 1 */}
            <div className="relative">
              <img
                src="https://images.ctfassets.net/prxuf37q3ta2/4oPm7qC4eppwDCpjfIeveH/37b355c7035d5d95ff3eb68468675821/DESKTOP_CAROUSEL_1b.jpg?w=1024"
                alt="Christmas Decoration 1"
                className="w-full object-cover"
              />
              <div className="bg-white text-black text-center">
                <p className="font-sm hover:underline">Men's Jaeger</p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative">
              <img
                src="https://images.ctfassets.net/prxuf37q3ta2/6Ro4Xv82XYJBdXEQRMNrzf/0b851338c17e541af2d939f5480dc4ca/DESKTOP_CAROUSEL_1c.jpg?w=1024"
                alt="Christmas Decoration 2"
                className="w-full object-cover"
              />
              <div className="bg-white text-black text-center ">
                <p className="font-sm hover:underline">How to style it</p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative">
              <img
                src="https://images.ctfassets.net/prxuf37q3ta2/5dXexdqEOuSboEraQO2lbl/2b77842ad9663a29b45414ed089bad79/DESKTOP_CAROUSEL_1d.jpg?w=1024"
                alt="Christmas Decoration 3"
                className="w-full object-cover"
              />
              <div className="bg-white text-black  text-center">
                <p className="font-sm hover:underline">Styling tips</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Grid with Image */}
        <div className="relative">
          <img
            src="https://images.ctfassets.net/prxuf37q3ta2/4U0gvbgY7hwdNUMtbwiLQe/1c002c2353d542e6493dd710d1bceb3f/DESKTOP_HERO_1a.jpg?w=2048&fm=webp&q=70"
            alt="Christmas Image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>




      {/* second component */}

      <div className="grid grid-cols-[3fr_2fr] min-h-screen">
        {/* Left Image Grid */}
        <div className="relative">
          <img
            src="https://images.ctfassets.net/prxuf37q3ta2/184bxCuloYky06AjT31fAW/514316e53af339f2d926df805ce59807/DESKTOP_HERO_2a.jpg?w=2048&fm=webp&q=70"
            alt="Fashion Model"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Content Grid */}
        <div className="bg-[#443c3a] flex flex-col justify-start items-center p-12 relative">
          {/* Raised Text - Upper Center */}
          <div className="text-center w-full flex flex-col items-end mb-auto mt-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Feel brand new</h1>
            <p className="text-lg lg:text-xl mb-4 text-white pl-20">Step out in style this season</p>
            <button className="px-6 py-3 ml-32 bg-white text-black font-sm hover:bg-gray-100 transition duration-300">
              Women's new in &rarr;
            </button>
          </div>

          {/* Bottom Image Grid - Raised Up */}
          <div className="absolute bottom-0 left-0 lg:transform lg:-translate-x-1/4 w-full lg:w-[120%] mb-24 grid grid-cols-3 gap-[10px]">
            {/* Image 1 */}
            <div className="relative">
              <img
                src="https://images.ctfassets.net/prxuf37q3ta2/CTzNT5nNQxveS2nXF8rtU/390c96a5c1f0afe1d1172892aa50ebd0/DESKTOP_CAROUSEL_2b.jpg?w=1024"
                alt="Women's Jackets"
                className="w-full object-cover"
              />
              <div className="bg-white text-black text-center">
                <p className="font-sm hover:underline">Women’s jackets</p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative">
              <img
                src="https://images.ctfassets.net/prxuf37q3ta2/2JJQZhODjBa7FS3CO74RuY/728298687a770e64c3979c8da450f910/DESKTOP_CAROUSEL_2c.jpg?w=1024"
                alt="Women's Knits"
                className="w-full object-cover"
              />
              <div className="bg-white text-black text-center ">
                <p className="font-sm hover:underline">Women’s knits</p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative">
              <img
                src="https://images.ctfassets.net/prxuf37q3ta2/7CEbALMCeh39ypMFh5QwaJ/f1ec1f91936cd310c42946a79cf56b66/DESKTOP_CAROUSEL_2e.jpg?w=1024"
                alt="Women's Autograph"
                className="w-full object-cover"
              />
              <div className="bg-white text-black text-center">
                <p className="font-sm hover:underline">Women’s Autograph</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* component 3 */}

      <div className="grid grid-cols-[2fr_3fr] min-h-screen">
        {/* Left Side Grid with Black Background */}
        <div className="bg-black flex flex-col justify-start items-center p-8 relative">
          {/* Title and Description */}
          <div className=" mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">The Christmas</h1>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Shop</h1>
            <p className="text-lg lg:text-xl text-white mb-4">It's never too early to start planning</p>
            <button className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-100 transition duration-300">
              Christmas food &rarr;
            </button>
          </div>

          {/* Bottom Image Grid - Shifted to the Right */}
          <div className="absolute bottom-0 left-[40px] lg:transform lg:-translate-x-1/5 z-10 w-full lg:w-[120%] mb-16 grid grid-cols-3 gap-2">
            {/* Image 1 */}
            <div className="relative">
              <img
                src="https://images.ctfassets.net/prxuf37q3ta2/6FCVAlua4oQ3pprVpbnCgB/7bc1db40c1053be274f994f926c9b9c3/DESKTOP_CAROUSEL_1b.jpg?w=1024"
                alt="Christmas Decoration 1"
                className="w-full object-cover"
              />
              <div className="bg-white text-black text-center">
                <p className="font-sm hover:underline">Shop decorations</p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative">
              <img
                src="https://images.ctfassets.net/prxuf37q3ta2/cw4FBLN3JtGEAsT0OBOED/1cb86ed28cc7728a61d849779e0afd6d/DESKTOP_CAROUSEL_1d.jpg?w=1024"
                alt="Christmas Decoration 2"
                className="w-full object-cover"
              />
              <div className="bg-white text-black text-center ">
                <p className="font-sm hover:underline">Festive Pyjamas</p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative">
              <img
                src="https://images.ctfassets.net/prxuf37q3ta2/5Y65XHi4BfrtEq5yZAM1pg/10f61e26712d5ee464bd093f8279a422/DESKTOP_CAROUSEL_1c.jpg?w=1024"
                alt="Christmas Decoration 3"
                className="w-full object-cover"
              />
              <div className="bg-white text-black  text-center">
                <p className="font-sm hover:underline">Christmas trees</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Grid with Image */}
        <div className="relative">
          <img
            src="https://images.ctfassets.net/prxuf37q3ta2/7iaMUJUYdSWBnxS2Qzdt7U/e46445b9aa997627ebe58050971d610f/DESKTOP_HERO_1a.jpg?w=2048&fm=webp&q=70"
            alt="Christmas Image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>


      {/*forth component  */}

      <div className="grid grid-cols-[3fr_2fr] min-h-screen">
        {/* Left Image Grid */}
        <div className="relative">
          <img
            src="https://images.ctfassets.net/prxuf37q3ta2/4D3WA62DogzTil2tWDhkH4/4e833d2fd62ece7986339a3cc17ef4e2/DESKTOP_HERO_3a.jpg?w=2048&fm=webp&q=70"
            alt="Fashion Model"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Content Grid */}
        <div className="bg-[#567773] flex flex-col justify-start items-center p-14 relative">
          {/* Raised Text - Upper Center */}
          <div className=" w-full flex flex-col items-end   mb-auto mt-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Autumn's calling</h1>
            <p className="text-lg lg:text-xl  text-white ">Essential pieces to complete your</p>
            <p className="text-lg lg:text-xl mb-4 text-white ">look</p>

            <button className="px-6 py-3 ml-32 bg-white text-black font-sm hover:bg-gray-100 transition duration-300">
              Men's new in &rarr;
            </button>
          </div>

          {/* Bottom Image Grid - Raised Up */}
          <div className="absolute bottom-0 left-0 lg:transform lg:-translate-x-1/4 w-full lg:w-[120%] mb-16 grid grid-cols-3 gap-[10px]">
            {/* Image 1 */}
            <div className="relative">
              <img
                src="https://images.ctfassets.net/prxuf37q3ta2/4E6qdyKgUB9dRmpOYZwH27/1ae103f89777fdbeba6fbd5ae7c81d3f/DESKTOP_CAROUSEL_3d.jpg?w=1024"
                alt="Women's Jackets"
                className="w-full object-cover"
              />
              <div className="bg-white text-black text-center">
                <p className="font-sm hover:underline">Men’s jumpers</p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative">
              <img
                src="https://images.ctfassets.net/prxuf37q3ta2/1CdiELqUcbfZqtbMVYvig0/fb20aadc0a8e6d116984238d8991c5c3/DESKTOP_CAROUSEL_3c.jpg?w=1024"
                alt="Women's Knits"
                className="w-full object-cover"
              />
              <div className="bg-white text-black text-center ">
                <p className="font-sm hover:underline">Men’s jackets </p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative">
              <img
                src="https://images.ctfassets.net/prxuf37q3ta2/74boGVGtNaHCxcWNaWDmJT/fa5c9727cdafb8f34b40bc3202b7bf4d/DESKTOP_CAROUSEL_3b.jpg?w=1024"
                alt="Women's Autograph"
                className="w-full object-cover"
              />
              <div className="bg-white text-black text-center">
                <p className="font-sm hover:underline">Men’s Autograph</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* fifth component */}

      <div className="grid grid-cols-[2fr_3fr] min-h-screen">
        {/* Left Side Grid with Black Background */}
        <div className="bg-[#597295] flex flex-col justify-start items-left p-10 relative">
          {/* Title and Description */}
          <div className=" mt-10 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Layers up their</h1>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">looks</h1>
            <p className="text-lg lg:text-xl text-white mb-4">Everything to keep cool kids warm</p>
            <button className="px-6 py-3 bg-white text-black font-sm hover:bg-gray-100 transition duration-300">
              Kids new in &rarr;
            </button>
          </div>

          {/* Bottom Image Grid - Shifted to the Right */}
          <div className="absolute bottom-0 left-[40px] lg:transform lg:-translate-x-1/5 z-10 w-full lg:w-[120%] mb-16 grid grid-cols-3 gap-2">
            {/* Image 1 */}
            <div className="relative">
              <img
                src="https://images.ctfassets.net/prxuf37q3ta2/6zCRI0AiTKOTw2v9B1ITwE/10c6b2f6d738714b37a217252dc3c540/DESKTOP_CAROUSEL_4b.jpg?w=1024"
                alt="Christmas Decoration 1"
                className="w-full object-cover"
              />
              <div className="bg-white text-black text-center">
                <p className="font-sm hover:underline">Girls' coats</p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative">
              <img
                src="https://images.ctfassets.net/prxuf37q3ta2/3l40um3g5ZX5falu6cqEyE/c21a08cbaea90234d0b9962cd01a717f/DESKTOP_CAROUSEL_4c.jpg?w=1024"
                alt="Christmas Decoration 2"
                className="w-full object-cover"
              />
              <div className="bg-white text-black text-center ">
                <p className="font-sm hover:underline">Boys' coats</p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative">
              <img
                src="https://images.ctfassets.net/prxuf37q3ta2/59MWHDiVCipaBLt0EBxrXj/6d251ef9eae1b6814cf1fcd9601c0f3a/DESKTOP_CAROUSEL_4d.jpg?w=1024"
                alt="Christmas Decoration 3"
                className="w-full object-cover"
              />
              <div className="bg-white text-black  text-center">
                <p className="font-sm hover:underline">Girl's jeans</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Grid with Image */}
        <div className="relative">
          <img
            src="https://images.ctfassets.net/prxuf37q3ta2/7fJollAJBB35B1yq1VveLQ/3e0ff27533a32d1de0ea7238b7d7b864/DESKTOP_HERO_4a.jpg?w=2048&fm=webp&q=70"
            alt="Christmas Image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>




      {/* sixth component */}
      <div className="bg-white py-12">
        <h2 className="text-center text-3xl font-bold mb-8">Shop by department</h2>

        {/* Shop by department grid */}
        <div className=" blu-Cont flex space-x-4 px-4 hover:cursor-pointer">
          <div className="min-w-[160px]">
            <img
              src="https://images.ctfassets.net/prxuf37q3ta2/1mFzjtNH6Dyl8Ry1103PL5/f4ed5708675144fa2a825e1427d28a37/App_tile_2048x2048-New.jpg?w=1024"
              alt="Women"
              className="w-[200px] h-[200px]  mb-4"
            />
            <p className="text-center font-semibold hover:underline">Women</p>
          </div>

          <div className="min-w-[160px]">
            <img
              src="https://images.ctfassets.net/prxuf37q3ta2/2IPSECmgB8IsnLYC0lj0gm/a314e516c780050bb5bf28fb9c1ad0ec/Further_sep_sale_APP_SEARCH_TILE1_2048X2048.jpg?w=1024"
              alt="Women"
              className="w-[200px] h-[200px] mb-4"
            />
            <p className="text-center font-semibold hover:underline">Sale</p>
          </div>

          <div className="min-w-[160px]">
            <img
              src="https://images.ctfassets.net/prxuf37q3ta2/1Wtnat8nVE3WXJPUVy9yWO/f7187b175f347b20521bfdb162b06d7c/2048X2048__1_.jpg?w=1024"
              alt="Kids"
              className="w-[200px] h-[200px] mb-4"
            />
            <p className="text-center font-semibold hover:underline">Kids</p>
          </div>

          <div className="min-w-[160px]">
            <img
              src="https://images.ctfassets.net/prxuf37q3ta2/4G0F456sS5QKcqnAHj4ys6/4386d0f7e342dfa7933651f4e3f43fd9/2048x2048_new.jpg?w=1024"
              alt="Men"
              className="w-[200px] h-[200px] hover:cursor-pointer mb-4"
            />
            <p className="text-center hover:underline">Men</p>
          </div>

          <div className="min-w-[160px]">
            <img
              src="https://images.ctfassets.net/prxuf37q3ta2/7KeSFlxCy5MrvcFaddqa2k/c840788d64537aa31c83095aed19d781/2048x2048px.jpg?w=1024"
              alt="Lingerie & Nightwear"
              className="w-[200px] h-[200px] mb-4"
            />
            <p className="text-center">Lingerie & Nightwear</p>
          </div>

          <div className="min-w-[160px]">
            <img
              src="https://images.ctfassets.net/prxuf37q3ta2/5XLDVYMPbJ00yukITNfdhs/346a9138da8c730a6e82636eeadf2ab3/2048X2048__7_.jpg?w=1024"
              alt="Home"
              className="w-[200px] h-[200px] mb-4"
            />
            <p className="text-center">Home</p>
          </div>
        </div>


      </div>



    </div>
  );
};

export default Home;

