import React from 'react';
import ProductCard from './components/ProductCard';

import { Container, Bar, Content, Banner, ShoesDisplayContainer, ShoesList } from './styles';

import shoesImages from "../../shoes"

function Home() {
  document.title = "JordansShoes - Home"
  return (
    <Container>
      <Bar>
        <p >Ganhe R$ 10,00 de desconto no frete</p>
      </Bar>
      <Content>
        <h1 className='Title'>JordanShoes</h1>
        <Banner>
          <div>
            <h1>A melhor loja de Jordan</h1>
            <p>O tênis Jordan é fruto de uma velha e forte parceria <br />
              entre a Nike e o jogador Michael Jordan.
            </p>
          </div>
        </Banner>
        <ShoesDisplayContainer>
          <h1>Destaques</h1>
          <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</p>
          <ShoesList>
            {shoesImages.map(image => (
              <ProductCard image={image} />
            ))}
          </ShoesList>
        </ShoesDisplayContainer>
      </Content>
      <Bar>
        <p >Todos os direitos reservados.</p>
      </Bar>
    </Container>
  )
}

export default Home;