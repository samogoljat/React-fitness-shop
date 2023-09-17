// products.js

import axios from 'axios';

// Function to fetch products from the backend
export const fetchProducts = async () => {
    try {
        const response = await axios.get('http://localhost:5000/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return []; // Return an empty array in case of error, to avoid any issues with .map() in the App component.
    }
};