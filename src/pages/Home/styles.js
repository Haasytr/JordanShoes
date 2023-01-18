import styled from 'styled-components';

import bannerBg from '../../assets/home/banner-bg.png';
import bannerBgMobile from '../../assets/home/banner-bg-mobile.png';

const colors = {
  white: "#F9F9F9",
  white200: '#EBE9EA',
  gray: '#474747',
  blackLight: '#181818'

}

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat";
`;

export const Bar = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${colors.blackLight};

  p {
    color: ${colors.white};
  } 
;
`

export const Content = styled.main`
  > h1 {
    text-align: center;
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  p {
    font-weight: 500;
  }
`
export const Banner = styled.main`
  width: 100vw;
  height: 378px;
  display: flex;

  background-image: url(${bannerBg});
  background-size: cover;

   @media (max-width: 769px) {
      background-image: url(${bannerBgMobile});
   }

  > div {
    width: 100%;
    height: 100%;
    padding: 3rem;

    color: ${colors.white};

    background-color: rgba(24, 24, 24, 0.6);
  
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
      font-size: 3rem;
      font-weight: 600;
      margin: 1.5rem 0;
    }
    p{
      font-size: 1.5rem;
    }

    @media (max-width: 769px) {
      padding: 0 1.25rem;

      h1 {
        font-size: 1.75rem;
      }
      p {
        br {
          display: none;
        }
      }
    }
  }
`
export const ShoesDisplayContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;
  
  padding: 4.375rem 6.25rem;

  text-align: center;


  h1 {
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    font-size: 1.25rem;
  }

  @media (max-width: 1060px) {
    padding: 2.5rem 0;
  }
`
export const ShoesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin: 3rem 0;

  @media (max-width: 769px) {
    grid-template-columns: 1fr;
  }
`