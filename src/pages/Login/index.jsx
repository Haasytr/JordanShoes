import React from 'react';

import { Container, LoginContainer, Button, Actions, Footer, LoginBox } from './styles';
import LoginBackground from '../../assets/login/login-bg.png';
import GoogleLogo from '../../assets/login/google-logo.svg';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  document.title = "JordansShoes - Login"

  function handleSubmit(event) {
    event.preventDefault()

    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email && password) {
      localStorage.setItem("user", email);

      navigate("/home");
    }
  }

  return (
    <Container>
      <img src={LoginBackground} alt='' />
      <LoginContainer>
        <LoginBox>
          <header>
            <span>Bem vindo de volta</span>
            <h1>Faça login na sua conta</h1>
          </header>
          <form onSubmit={handleSubmit} action='#' >
            <label>E-mail</label>
            <input type="email" name="email" placeholder='Email...' required />

            <label>Senha</label>
            <input type="password" name="password" placeholder='*********' required />

            <Actions>
              <div>
                <input id='remember_me' type="checkbox" />
                <span class="checkmark"></span>
                <label htmlFor='remember_me'>Lembre de mim</label>
              </div>

              <a href="#">Esqueceu sua senha?</a>
            </Actions>
            <Button btnType="primary" type='submit'>Entrar</Button>
            <Button action="loginWithGoogle">
              <img src={GoogleLogo} alt="Google" />
              Ou faça login com o Google
            </Button>
          </form>
        </LoginBox>
        <Footer>
          <p>
            Não tem uma conta?
            <a href="#">Cadastre-se</a>
          </p>
        </Footer>
      </LoginContainer>

    </Container>
  );
}

export default Login;