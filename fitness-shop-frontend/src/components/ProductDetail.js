// fitness-shop-frontend/src/components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { products } from '../helpers/fetchProducts'; // Import products data
import '../styles/ProductDetail.css'; // Import styles

const ProductDetail = () => {
  const { productId } = useParams(); // Extract productId from URL
  const product = products.find((p) => p.id === parseInt(productId)); // Find the product

  // Render loading text if product is not found (considering async data fetch in future)
  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>€{product.price}</p>
      {/* Additional product details can be added here */}
    </div>
  );
};

export default ProductDetail;
