import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  WelcomeContainer,
  BrandName,
  Description,
  SlideshowContainer,
  SlideshowImage,
  ExploreButton,
} from './WelcomePageStyles';

type CatImage = {
  id: string;
  url: string;
};

const WelcomePage = () => {
  const [catImages, setCatImages] = useState<CatImage[]>([]);

  const fetchCatImages = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=1', {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'live_X3e38glAe1lJutfCZeC6XUWz9u4XfdD9uYM1kLwaEIRzTou3bMZzYpM09geLxRRd',
        },
      });

      if (response.status === 200) {
        setCatImages(response.data);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error fetching cat images:', error);
    }
  };

  useEffect(() => {
    fetchCatImages();
  }, []);

  const currentImage = catImages[0]; // Display only the first image

  return (
    <WelcomeContainer>
      <BrandName>Cat App</BrandName>
      <SlideshowContainer>
        {currentImage && (
          <SlideshowImage
            src={currentImage.url}
            alt={`Random Cat ${currentImage.id}`}
          />
        )}
      </SlideshowContainer>
      <Description>
        Welcome to the Cat App, your source for all things cat-related...
      </Description>
      <ExploreButton to="/home">Explore</ExploreButton>
    </WelcomeContainer>
  );
};

export default WelcomePage;
