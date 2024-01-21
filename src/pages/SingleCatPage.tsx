import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, ImageContainer, CatImage, DetailsContainer, DetailItem } from './SingleCatPageStyles';
import { fetchCatData, CatData } from '../services/catApi';


const SingleCatPage = () => {
  const { catId } = useParams<{ catId: string }>();
  const [catData, setCatData] = useState<CatData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (catId) {
        const data = await fetchCatData(catId);
        setCatData(data);
      }
    };

    fetchData();
  }, [catId]);

  if (!catData) return <div>Loading...</div>;

  const breed = catData.breeds[0];

  return (
    <Container>
      <ImageContainer>
        <CatImage src={catData.url} alt={breed.name} />
      </ImageContainer>
      <DetailsContainer>
        <DetailItem>Name: {breed.name}</DetailItem>
        <DetailItem>Origin: {breed.origin}</DetailItem>
        <DetailItem>Temperament: {breed.temperament}</DetailItem>
        <DetailItem>Description: {breed.description}</DetailItem>
      </DetailsContainer>
    </Container>
  );
};

export default SingleCatPage;
