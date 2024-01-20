import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { CenteredContainer, StyledSelect } from './HomePageStyles';
import { BreedOption, fetchBreedOptions } from '../services/catApi';

const HomePage = () => {
  const [breedOptions, setBreedOptions] = useState<BreedOption[]>([]);

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

  return (
    <CenteredContainer>
      <StyledSelect>
        <Select
          options={breedOptions}
          placeholder="Select Breed To Explore"
          isSearchable
        />
      </StyledSelect>
    </CenteredContainer>
  );
};

export default HomePage;
