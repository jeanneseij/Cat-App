import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { CenteredContainer, StyledSelect, ImagesContainer, ImageContainer, Image } from './HomePageStyles';
import { BreedOption, ImageType, fetchBreedOptions, fetchBreedImages } from '../services/catApi';

const HomePage = () => {
  const [breedOptions, setBreedOptions] = useState<BreedOption[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<BreedOption | null>(null);
  const [images, setImages] = useState<ImageType[]>([]);

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
        {images.map((image, index) => (
          <ImageContainer key={index}>
            <Image src={image.url} alt="Cat" />
          </ImageContainer>
        ))}
      </ImagesContainer>
    </CenteredContainer>
  );
};

export default HomePage;
