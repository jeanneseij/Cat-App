import React from 'react';
import { WelcomeContainer, BrandName, Description, ExploreButton } from './WelcomePageStyles';

const WelcomePage = () => {
  return (
    <WelcomeContainer>
      <BrandName>Cat App</BrandName>
      <Description>Welcome to the Cat App, your source for all things cat-related...</Description>
      <ExploreButton to="/home">Explore</ExploreButton>
    </WelcomeContainer>
  );
};

export default WelcomePage;
