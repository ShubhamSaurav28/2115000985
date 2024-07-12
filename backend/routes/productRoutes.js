const express = require('express');
const app = express();
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const generateProductId = () => uuidv4();

app.get('/:categoryName/products', async (req, res) => {
  try {
    const { categoryName } = req.params;
    const { n, minPrice, maxPrice, sortBy, order, page, limit } = req.query;

    const url = `${baseUrl}/${company}/categories/${categoryName}/products?top=${n}&minPrice=1&maxPrice=10000`;
    const productsData = await axios.get(url);
    const products = productsData.data;

    let filteredProducts = products.filter(product => product.category === categoryName);

    if (minPrice) filteredProducts = filteredProducts.filter(product => product.price >= parseFloat(minPrice));
    if (maxPrice) filteredProducts = filteredProducts.filter(product => product.price <= parseFloat(maxPrice));

    if (sortBy) {
      filteredProducts.sort((a, b) => {
        const comparison = order === 'desc' ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy];
        return comparison;
      });
    }
    const startIndex = (page - 1) * limit;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + limit);
    const response = paginatedProducts.map(product => ({
      ...product,
      id: generateProductId(),
    }));

    res.json(response);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/:categoryName/products/:productId', async (req, res) => {
  try {
    const { categoryName, productId } = req.params;

    const productsData = await client.get('products'); 
    const products = JSON.parse(productsData);

    const product = products.find(product => generateProductId(product) === productId && product.category === categoryName);

    if (product) {
      res.json(product);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    console.error('Error fetching product details:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = app; // Corrected export statement
