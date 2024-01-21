import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  max-width: 570px;
  margin: auto;
`;

export const ImageContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  max-height: 570px;
  max-width: 1200px;
  display: flex;
  justify-content: center
`;

export const CatImage = styled.img`
  max-height: 10%
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0.3, 0.4);
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 10px;
  background: #f3f3f3;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const DetailItem = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #333;
`;


