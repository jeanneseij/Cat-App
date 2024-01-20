import styled from 'styled-components';

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  padding-top: 80px;
  gap: 20px;
`;

export const StyledSelect = styled.div`
  width: 300px;
  .react-select__control {
    min-height: 38px;
  }
  .react-select__menu {
    width: 300px;
  }
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: center;
  gap: 50px;
  padding: 10px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 5px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LoadMoreButton = styled.button`
  background-color: #f3dace;  // Soft peach primary color
  color: #5c5c5c;  // Darker text for contrast
  border: 2px solid #f3dace; // Border to maintain consistency
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
  
  &:hover {
    background-color: #e8c1b0;  // A slightly darker shade for hover
    border-color: #e8c1b0; // Darken the border as well on hover
    transform: scale(1.05);  // Slightly enlarge button on hover
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(243, 218, 206, 0.5);  // Focus ring matching the button color
  }

  &:disabled {
    background-color: #f8e6dc;
    color: #a8a8a8;
    border-color: #f8e6dc;
    cursor: not-allowed;
  }
`;