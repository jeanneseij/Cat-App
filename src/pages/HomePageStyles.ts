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