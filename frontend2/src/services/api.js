import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test';

export const fetchProducts = async (company, category, minPrice, maxPrice) => {
  const response = await axios.get(`${API_BASE_URL}/companies/${company}/categories/${category}/products/top-1000`, {
    params: {
      minPrice,
      maxPrice,
    },
  });
  return response.data;
};

export const fetchProductDetails = async (company, category, productId) => {
  const response = await axios.get(`${API_BASE_URL}/companies/${company}/categories/${category}/products/${productId}`);
  return response.data;
};
