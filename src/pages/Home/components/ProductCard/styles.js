import styled from 'styled-components';

export const Container = styled.div`
  padding: 4.75rem 5.1875rem;
  background-color: #EBE9EA;
  border: 5px;

  transition: 0.2s;

  &:hover {
    background-color: #f3f1f2;
  }

  @media (max-width: 300px) {
    padding: 0px;
  }

  @media (min-width: 300px) and (max-width: 769px) {
    padding: 3.5rem 2.5rem;
  }

  @media (min-width: 769px) and (max-width: 1300px) {
    > img {
      height: 85%;
    }
  }
`;