// src/helpers/fetchProducts.js

import axios from 'axios';

export const fetchProducts = async () => {
    try {
        const response = await axios.get('http://localhost:5000/products');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};
