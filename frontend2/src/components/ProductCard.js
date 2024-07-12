import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div>
      <h2>{product.productName}</h2>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}</p>
      <p>Availability: {product.availability}</p>
      <Link to={`/products/${product.company}/${product.category}/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
