import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Shop = () => {
    const { products, loading } = useContext(CartContext);  // Use loading from context

    if (loading) {
        return <p>Loading....</p>;  // Display loading while fetching
    }

    if (!Array.isArray(products) || products.length === 0) {
        return <p>No products available.</p>;  // Handle case where no products are found
    }

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
    console.log(products)


    return (
        <div className="container mx-auto p-4">
            <nav className="text-sm text-black semi-bold mb-4">
                <ol className="list-reset flex">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><span className="mx-2">/</span></li>
                    <li><a href="#" className="hover:underline">Gifts</a></li>
                    <li><span className="mx-2">/</span></li>
                    <li><a href="#" className="hover:underline">Food & Drink Gifts</a></li>
                    <li><span className="mx-2">/</span></li>
                    <li className="text-gray-600">Fruit Baskets</li>
                </ol>
            </nav>

            {/* Title and Description */}
            <div className="mb-8">
                <h1 className="text-3xl font-semibold mb-2">Fruit Baskets</h1>
                <p className="text-[18px] text-gray-700">
                    Spoil someone with the luscious flavours and bright colours of our fruit baskets. Juicy pears are perfect for sinking your teeth into, while silky plums and fragrant mangoes melt against the tongue. For a deliciously shareable treat, there are also succulent slices of tangy pineapple. Spend over £60 to qualify for free delivery.
                </p>
            </div>

            <div className="bg-yellow-400 text-black p-2  mb-8 text-center">
                <h2 className="text-lg font-semibold">Delivery included</h2>
                <p>on all food & drink hampers</p>
            </div>

            {/* Filter Section */}
            <div className="flex items-center justify-between border-b border-t pb-5 py-6 ">
                <div className="relative flex gap-6">
                    <button className="flex items-center font-semibold text-black focus:outline-none">
                        Occasion
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>

                    <button className="flex items-center font-semibold text-black focus:outline-none">
                        Price
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    {/* Dropdown options can be added here */}
                </div>


            </div>

            <div className="flex items-center justify-between mt-4 pb-2">
                <div className="relative flex gap-3">
                    <button className="flex items-center text-gray-700 focus:outline-none">
                        4 Items
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>


                    {/* Dropdown options can be added here */}
                </div>

                <div className="relative">
                    <button className="flex items-center font-semibold text-black focus:outline-none gap-4">
                        Relevance
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    {/* Dropdown options can be added here */}
                </div>
            </div>


            <div className="container mx-auto p-6">
                <h1 className="text-xl font-bold mb-4">Products</h1>
                <div className="grid grid-cols-4 gap-4">
                    {products.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} className=" mb-4">
                            <div>
                                <img
                                    src={product.images}
                                    alt={product.title}
                                    className="w-full h-80 object-cover mb-4"

                                    
                                />
                                <h2 className="font-bold text-lg mb-2">{product.title}</h2>
                                <p className="text-gray-500 mb-3">${product.price}</p>
                                <div className="flex items-center justify-start mt-2">
                            {renderStars(product.rating)}
                            <p className="ml-2 text-sm text-gray-600 underline">{product.reviews} reviews</p>
                        </div>
                            </div>

                            
                        
                        </Link>
                    ))}
                </div>
            </div>
            

        </div>
    );
};

export default Shop;





