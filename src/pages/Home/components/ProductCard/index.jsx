import React from 'react';

import { Container } from './styles';


function ProductCard({ image }) {

  return (
    <Container>
      <img src={require(`/src/assets/home/shoes/${image}`)} alt="Tênis" />
    </Container>
  );
}

export default ProductCard;