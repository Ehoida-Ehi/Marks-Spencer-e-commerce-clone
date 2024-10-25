import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const base_url = "http://ecommerce.reworkstaging.name.ng/v2";

    // Initialize state for cart items, ensuring it's always an array
    const [cartItems, setCartItems] = useState([])
    const [products, setProducts] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    // Fetch products into the shopping page
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const merchant = JSON.parse(localStorage.getItem("merchant_details"));
                const category = JSON.parse(localStorage.getItem("created_Category"));

                if (!merchant || !category || !category.id) {
                    console.error("Merchant ID or Category ID is not available");
                    return;
                }

                // Ensure you use backticks for template literals in the API call
                const response = await axios.get(
                    `${base_url}/products?merchant_id=${merchant.id}&limit=12`
                );

                // Ensure you're accessing the data array correctly
                console.log("API Response:", response.data);
                setProducts(response.data.data || []); // Use the correct path to data
            } catch (error) {
                console.error("Error fetching products", error);
            }
        };

        fetchProducts();
    }, [base_url]);

    const fetchCartItems = async () => {
        try {
            const user_id = JSON.parse(localStorage.getItem('user_details')).id;
            const response = await axios.get(`${base_url}/carts?user_id=${user_id}`);
            const items = response.data || []; // Fallback to empty array if no data is present
            setCartItems(items);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    // Effect to calculate total amount
    useEffect(() => {
        if (Array.isArray(cartItems)) {
            const total = cartItems.reduce((acc, item) => acc + (item.quantity || 0) * (item.price || 0), 0);
            setTotalAmount(total);
        } else {
            setTotalAmount(0); // Set to 0 if cartItems is not an array
        }
    }, [cartItems]);

   

    // Add a new item to the cart
    const addCartItem = async (newItem) => {
        try {
            // Use backticks for template literals in the API call
            const response = await axios.post(`${base_url}/carts`, newItem);

            // Check the structure of the response data
            console.log('Product added to cart:', response.data);
            fetchCartItems();

        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };


    // Increment cart item quantity
    const incrementCart = (id) => {
        setCartItems(cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    // Decrement cart item quantity
    const decrementCart = (id) => {
        setCartItems(cartItems.map((item) =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    // Update cart item quantity
    const updateCartQty = (id, quantity) => {
        setCartItems(cartItems.map((item) =>
            item.id === id ? { ...item, quantity } : item
        ));
    };

    const deleteCartContents = async () => {
        const userId = JSON.parse(localStorage.getItem("user_details")).id;

        try {
            const response = await fetch('http://ecommerce.reworkstaging.name.ng/v2/carts', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user_id: userId }),
            });

            if (response.ok) {
                // Clear cart items from state
                setCartItems([]); // This clears the cart items without needing a page reload
                console.log('Cart contents deleted successfully');
            } else {
                console.error('Failed to delete cart contents');
            }
        } catch (error) {
            console.error('Error deleting cart contents:', error);
        }
    };

    

    const values = {
        products,
        cartItems,
        totalAmount,
        base_url,
        incrementCart,
        decrementCart,
        addCartItem,
        deleteCartContents,
        updateCartQty,
    };

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
};

