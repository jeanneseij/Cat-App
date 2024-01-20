import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const WelcomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
  color: #5a3825;
  padding: 2rem;
  text-align: center;
`;

export const BrandName = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

export const SlideshowContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 400px;
  margin: 1rem 0;
  background-color: transparent;
`;

export const SlideshowImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  position: absolute;
  opacity: 0;
  border-radius: 5px;

  &.fadeIn {
    animation: ${fadeIn} 5s ease-in-out forwards;
  }

  &.fadeOut {
    animation: ${fadeOut} 5s ease-in-out forwards;
  }
`;

export const ExploreButton = styled(Link)`
  background-color: #5a3825;
  color: #f3dace;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #7c5948;
    transform: scale(1.05);
  }
`;