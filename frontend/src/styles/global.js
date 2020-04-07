import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root{
    height: 100%;
    min-width: 910px;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

  form p {
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    color: #444;
  }

  form input {
    width: 45px;
    height: 45px;
    width: 100%;
    border-radius: 4px;
    padding: 0 16px;
    border: 1px solid #ddd;
    background: #fff;
    color: #333;
    font-size: 16px;

    &::placeholder {
      color: #999;
    }
  }
`;
