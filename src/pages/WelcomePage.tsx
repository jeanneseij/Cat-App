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

// Defining types for cat images fetched from the API
type CatImage = {
  id: string;
  url: string;
};

const WelcomePage = () => {
  const [catImages, setCatImages] = useState<CatImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fetching cat images from the API
  const fetchCatImages = async () => {
    try {
      // API key for authentication
      const apiKey = process.env.CAT_API_KEY;
      
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10', {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
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

  // Fetch cat images when the component mounts
  useEffect(() => {
    fetchCatImages();
  }, []);

  // Auto-rotate the images every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % catImages.length);
    }, 10000);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, [catImages.length]);

  // Get the current and next cat images
  const currentImage = catImages[currentImageIndex];
  const nextImage = catImages[(currentImageIndex + 1) % catImages.length];

  return (
    <WelcomeContainer>
      <BrandName>Cat App</BrandName>
      <SlideshowContainer>
        {currentImage && (
          <SlideshowImage
            key={currentImage.id}
            src={currentImage.url}
            alt={`Random Cat ${currentImage.id}`}
            className="fadeOut"
          />
        )}
        {nextImage && (
          <SlideshowImage
            key={nextImage.id}
            src={nextImage.url}
            alt={`Random Cat ${nextImage.id}`}
            className="fadeIn"
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