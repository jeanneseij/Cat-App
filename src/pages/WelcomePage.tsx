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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fetchCatImages = async () => {
    try {
      const apiKey = 'live_X3e38glAe1lJutfCZeC6XUWz9u4XfdD9uYM1kLwaEIRzTou3bMZzYpM09geLxRRd';
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

  useEffect(() => {
    fetchCatImages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % catImages.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [catImages.length]);

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