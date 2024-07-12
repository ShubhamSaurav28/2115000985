import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../services/api';

const ProductDetails = () => {
  const { company, category, productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProductDetails(company, category, productId);
      setProduct(data);
    };
    fetchData();
  }, [company, category, productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.productName}</h1>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};

export default ProductDetails;
