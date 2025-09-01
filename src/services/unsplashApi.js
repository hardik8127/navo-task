import axios from 'axios';

// Get the Unsplash Access Key from environment variables
// You can get this from https://unsplash.com/developers
const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
  },
});

export const searchImages = async (query, page = 1, perPage = 20) => {
  console.log('API Key available:', !!UNSPLASH_ACCESS_KEY);
  console.log('API Key length:', UNSPLASH_ACCESS_KEY?.length);
  
  if (!UNSPLASH_ACCESS_KEY) {
    throw new Error('Unsplash API key is not configured. Please add VITE_UNSPLASH_ACCESS_KEY to your .env file.');
  }

  try {
    console.log('Making request to Unsplash API with query:', query);
    const response = await unsplashApi.get('/search/photos', {
      params: {
        query,
        page,
        per_page: Math.min(perPage, 30), // Limit for better mobile performance
        order_by: 'relevant',
      },
    });
    console.log('API Response received:', response.status);
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    console.error('Response status:', error.response?.status);
    console.error('Response data:', error.response?.data);
    
    if (error.response?.status === 401) {
      throw new Error('Invalid API key. Please check your Unsplash access key.');
    }
    if (error.response?.status === 403) {
      throw new Error('API rate limit exceeded or insufficient permissions.');
    }
    throw new Error('Failed to fetch images. Please try again.');
  }
};

export default unsplashApi;
