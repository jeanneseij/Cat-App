import React, { useEffect, useState } from 'react';
import { fetchCatImages, CatImage } from '../services/catApi';
import {
  WelcomeContainer,
  BrandName,
  Description,
  SlideshowContainer,
  SlideshowImage,
  ExploreButton,
} from './WelcomePageStyles';

const WelcomePage = () => {
  const [catImages, setCatImages] = useState<CatImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fetching cat images from the API
  useEffect(() => {
    const loadCatImages = async () => {
      const images = await fetchCatImages();
      setCatImages(images);
    };

    loadCatImages();
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