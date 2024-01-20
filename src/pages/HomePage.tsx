import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useNavigate, useLocation } from 'react-router-dom';
import { CenteredContainer, StyledSelect, ImagesContainer, ImageContainer, Image, LoadMoreButton} from './HomePageStyles';
import { BreedOption, ImageType, fetchBreedOptions, fetchBreedImages } from '../services/catApi';

const HomePage = () => {
  const [breedOptions, setBreedOptions] = useState<BreedOption[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<BreedOption | null>(null);
  const [images, setImages] = useState<ImageType[]>([]);
  const [displayCount, setDisplayCount] = useState<number>(5);

  useEffect(() => {
    async function fetchData() {
      try {
        const options = await fetchBreedOptions();
        setBreedOptions(options);
      } catch (error) { 
        throw new Error('An error occurred while fetching data. Please try again.');
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      if (selectedBreed) {
        const breedImages = await fetchBreedImages(selectedBreed.value);
        setImages(breedImages);
      }
    };

    loadImages();
  }, [selectedBreed]);

  const handleLoadMore = () => {
    setDisplayCount(prevCount => Math.min(prevCount + 5, images.length));
  };

  return (
    <CenteredContainer>
      <StyledSelect>
        <Select
          options={breedOptions}
          onChange={option => setSelectedBreed(option)}
          value={selectedBreed}
          placeholder="Select Breed To Explore"
          isSearchable
        />
      </StyledSelect>
      <ImagesContainer>
        {images.slice(0, displayCount).map((image, index) => (
          <ImageContainer key={index}>
            <Image src={image.url} alt="Cat" />
          </ImageContainer>
        ))}
      </ImagesContainer>
  
      {displayCount < images.length && (
        <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
      )}
    </CenteredContainer>
  );
};

export default HomePage;
