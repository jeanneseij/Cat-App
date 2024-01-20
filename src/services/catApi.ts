import axios from 'axios';

export type CatImage = {
  id: string;
  url: string;
};

const baseUrl = process.env.REACT_APP_CAT_API_BASE_URL;
const apiKey = process.env.REACT_APP_CAT_API_KEY;

// Fetching of 10 random cat images from API
export const fetchCatImages = async (): Promise<CatImage[]> => {
  try {
    if (!baseUrl || !apiKey) {
      throw new Error('API configuration is missing');
    }

    const response = await axios.get(`${baseUrl}/images/search?limit=10`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error fetching cat images:', error);
    return [];
  }
};
