import styled from 'styled-components';

export const Container = styled.div`
  padding: 4.75rem 5.1875rem;
  background-color: #EBE9EA;
  border: 5px;

  transition: 0.2s;

  &:hover {
    background-color: #f3f1f2;
  }

  @media (max-width: 1790px) and (min-width: 769px) {
    padding: 1.5rem 2rem;

    img {
       width: 180px;
      height: 150px
    }
  }
`;
