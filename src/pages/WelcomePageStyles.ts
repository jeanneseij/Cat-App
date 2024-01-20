import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
