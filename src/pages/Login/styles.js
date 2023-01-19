import styled from 'styled-components';

const colors = {
  green: "#04C35C",
  white: "#FFF",
  white200: "#F7FAFC",
  gray: "#1A202C",
}


export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

    @media (max-width: 750px) {
      grid-template-columns: 1fr;
    }
`;

export const BackgroundContainer = styled.div`
  background-color: ${colors.white200};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 750px) {
    display: none;
  }
`

export const LoginContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  font-family: "Lato", sans-serif;
`

export const LoginBox = styled.div`
  height: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;

  header {
    font-family: "Merriweather", sans-serif;
    
    h1 {
      margin-top: 0.5rem;
      font-size: 1.65rem;
    }
  }

  form {
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    margin-top: 2.5rem;

    label {
      color: ${colors.gray};
    }

    > input {
      height: 50px;
      
      font-size: 0.875rem;
      
      border: 1px solid #e8e8e8;
      border-radius: 5px;
      padding: 0 1.25rem;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.825rem 0;

  div {
    input {
      width: 15px;
      height: 15px;
      background-color: white;
      border-radius: 50%;
      vertical-align: middle;
      border: 1px solid #ddd;
      appearance: none;
      -webkit-appearance: none;
      outline: none;
      cursor: pointer;
      margin: 0 11px 3px 0;
      
      &:checked {
        background-color: ${colors.green};
        border: 2px solid ${colors.green};
      }
    } 
  }
`

export const Button = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;

    font-size: 1rem;
    font-weight: bold;
    color: white;
      
    border: none;
    border-radius: 5px;

    background: ${props => props.btnType === "primary" ? colors.green : colors.gray};

    > img {
      margin: 0 0.5rem;
    }
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;

  a {
    margin: 0.25rem;
  }
`