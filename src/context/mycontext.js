import { createContext, useState } from "react";
import axios from 'axios';

// const BASE_URL = 'http://ecommerce.reworkstaging.name.ng/v2';

export const MyContext = createContext(); // Correctly exporting context


export const MyContextProvider = ({ children }) => { // Capitalized component name
    const [currentpage, setCurrentpage] = useState('')
    // const [signpage, setSignpage] = useState('') 
    const myContextValue = { currentpage, setCurrentpage }; // You can add values to pass down through the context

    // Function to get user orders
    // const getUserOrders = async (user_id) => {
    //     try {
    //         const response = await axios.get(`${BASE_URL}/users/orders`, {
    //             params: { user_id }
    //         });
    //         console.log('User Orders:', response.data);
    //     } catch (error) {
    //         console.error('Error fetching user orders:', error);
    //     }
    // };

    // Function to get user reviews
    // const getUserReviews = async (user_id) => {
    //     try {
    //         const response = await axios.get(`${BASE_URL}/users/reviews`, {
    //             params: { user_id }
    //         });
    //         console.log('User Reviews:', response.data);
    //     } catch (error) {
    //         console.error('Error fetching user reviews:', error);
    //     }

    // Function to get user ratings
    // const getUserRatings = async (user_id) => {
    //     try {
    //         const response = await axios.get(`${BASE_URL}/users/ratings`, {
    //             params: { user_id }
    //         });
    //         console.log('User Ratings:', response.data);
    //     } catch (error) {
    //         console.error('Error fetching user ratings:', error);
    //     }
    // };

    // Function to get user likes
    // const getUserLikes = async (user_id) => {
    //     try {
    //         const response = await axios.get(`${BASE_URL}/users/likes`, {
    //             params: { user_id }
    //         });
    //         console.log('User Likes:', response.data);
    //     } catch (error) {
    //         console.error('Error fetching user likes:', error);
    //     }
    // };

    // Example usage with dynamic user ID
    // const user_id = "6710ca8280dc2036200767d2"; // This should be dynamically fetched after login

    // getUserOrders(user_id);
    // getUserReviews(user_id);
    // getUserRatings(user_id);
    // getUserLikes(user_id);




    return (
        <MyContext.Provider value={myContextValue}> {/* Correct provider usage */}
            {children}
        </MyContext.Provider>
    );
};

