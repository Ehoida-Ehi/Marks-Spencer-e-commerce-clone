
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext'; // Adjust the import as needed
import { TbLetterX } from 'react-icons/tb';
import { IoMdHeartEmpty } from 'react-icons/io';
import { CiLock } from 'react-icons/ci';
import { HiOutlineChevronDown } from 'react-icons/hi';

const CartPage = () => {
  const { cartItems, deleteCartContents, updateCartQty, products } = useContext(CartContext);
  const [cartTotal, setCartTotal] = useState(0); // State to track total amount

  // Find matching products in the cart and product list
  const findMatchingProducts = (orders, products) => {
    const matchedProducts = [];
    
    if (Array.isArray(orders)) {
      orders.forEach(order => {
        if (Array.isArray(order.products)) {
          order.products.forEach(orderProduct => {
            const matchingProduct = products.find(product => product.id === orderProduct.id);
            if (matchingProduct) {
              matchedProducts.push({
                ...matchingProduct,
                orderQuantity: orderProduct.quantity,
              });
            }
          });
        }
      });
    }
    
    return matchedProducts;
  };

  // Get the matched products
  const matchedProducts = findMatchingProducts(cartItems, products);

  // Calculate total price for all cart items
  const calculateTotalAmount = (items) => {
    const total = items.reduce((acc, item) => {
      const price = parseFloat(item.price); // Ensure price is a number
      return acc + (isNaN(price) ? 0 : price * item.orderQuantity); // Handle NaN case
    }, 0);
    setCartTotal(total);
  };

  // Update quantity and recalculate total
  const handleUpdateQty = (id, newQuantity) => {
    updateCartQty(id, newQuantity); // Update cart context with new quantity
    calculateTotalAmount(matchedProducts); // Recalculate total amount
  };

  useEffect(() => {
    // Recalculate total amount when cartItems or products change
    calculateTotalAmount(matchedProducts);
  }, [cartItems, products]);

  return (
    <div className="grid grid-cols-5 gap-8 p-8">
      {/* Left section: Cart items (3fr) */}
      <div className="col-span-3">
        <h1 className="text-2xl font-semibold">Your secure bag</h1>
        <div className="border-b py-4">
          <span className="text-gray-500">IN DEMAND</span>
          <span className="ml-2">Sold 6 times since your last visit 13 hours ago</span>
        </div>

        {/* Cart items */}
        <div className="flex items-start py-4">
          {cartItems && cartItems.length === 0 ? (
            <h1 className="text-2xl font-bold text-center mt-10">Your bag is empty</h1>
          ) : (
            <div>
              {matchedProducts.map(item => {
                const price = parseFloat(item.price); // Ensure price is a number
                const displayPrice = isNaN(price) ? "N/A" : price.toFixed(2); // Handle NaN case
                const total = (price * item.orderQuantity).toFixed(2); // Calculate total

                return (
                  <div key={item.id} className="flex items-center py-4">
                    <img
                      src={item.images}
                      alt={item.title}
                      className="w-24 h-24 object-cover"
                    />
                    <div className="ml-4">
                      <h2 className="text-lg font-medium">{item.title}</h2>
                      <p className="mt-2">£{displayPrice}</p>
                      <p className="mt-2">Total: £{total}</p> {/* Individual total */}
                    </div>
                    <div className="ml-auto">
                      {/* Quantity dropdown select */}
                      <select
                        value={item.orderQuantity}
                        onChange={(e) => handleUpdateQty(item.id, parseInt(e.target.value, 10))} // Parse the value to integer
                        className="border rounded p-1"
                      >
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      className="ml-8 flex items-center text-black hover:underline"
                      onClick={deleteCartContents}
                    >
                      <TbLetterX className="mr-2 w-7 h-7" />
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center mt-4">
          <button className="flex items-center text-black hover:underline">
            <IoMdHeartEmpty className="mr-2 w-7 h-7" />
            Move to wish list
          </button>
        </div>

        {/* Add gift message button */}
        <button className="mt-8 px-4 py-2 border border-gray-400 text-black">
          Add a gift message
        </button>
      </div>

      {/* Right section: Summary (2fr) */}
      <div className="col-span-2 border p-6">
        <h2 className="text-xl font-semibold">Summary</h2>
        <div className="mt-4 flex font-semibold justify-between">
          <div className="flex flex-col">
            <p className="mb-2">Total:</p>
            <p className="text-sm text-gray-500">(Excluding delivery)</p>
          </div>
          <h2 className="text-xl mt-6 font-bold">Total: £{cartTotal.toFixed(2)}</h2> {/* Display the total cart amount */}
        </div>

        <button className="mt-6 w-full bg-black text-white py-3 flex justify-center items-center">
          <CiLock className="w-6 h-6 mr-2" /> See next step
        </button>

        {/* Promotion code */}
        <div className="mt-8 flex justify-between">
          <p className="text-gray-500">Add a promotion code</p>
          <HiOutlineChevronDown className="h-5 w-5" />
        </div>
      </div>

      {/* Feedback button */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
        <button className="p-1 text-sm bg-black text-white rotate-90">Feedback</button>
      </div>
    </div>
  );
};

export default CartPage;
