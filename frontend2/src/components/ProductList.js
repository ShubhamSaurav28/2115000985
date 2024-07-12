import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ company: '', category: '', minPrice: '', maxPrice: '' });
  const [sort, setSort] = useState({ field: '', order: '' });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts(filters.company, filters.category, filters.minPrice, filters.maxPrice);
      setProducts(data);
    };
    fetchData();
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSortChange = (field) => {
    const order = sort.order === 'asc' ? 'desc' : 'asc';
    setSort({ field, order });
    const sortedProducts = [...products].sort((a, b) => order === 'asc' ? a[field] - b[field] : b[field] - a[field]);
    setProducts(sortedProducts);
  };

  return (
    <div>
      <h1>Top Products</h1>
      <div>
        <input type="text" name="company" placeholder="Company" onChange={handleFilterChange} />
        <input type="text" name="category" placeholder="Category" onChange={handleFilterChange} />
        <input type="number" name="minPrice" placeholder="Min Price" onChange={handleFilterChange} />
        <input type="number" name="maxPrice" placeholder="Max Price" onChange={handleFilterChange} />
        <button onClick={() => handleSortChange('price')}>Sort by Price</button>
        <button onClick={() => handleSortChange('rating')}>Sort by Rating</button>
        <button onClick={() => handleSortChange('discount')}>Sort by Discount</button>
      </div>
      <div>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
