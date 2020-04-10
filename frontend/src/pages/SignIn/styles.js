import styled from 'styled-components';

import { darken } from 'polished';

import { Form } from '@rocketseat/unform';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  padding: 40px 30px;

  display: flex;
  flex-direction: column;

  img {
    width: 260px;
    margin: 15px;
  }
`;

export const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  p {
    margin: 10px 0;
  }

  input {
    margin: 0 0 10px;
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    background: #7d40e7;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 20px;
    overflow: hidden;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.03, '#7d40e7')};
    }
  }
`;
