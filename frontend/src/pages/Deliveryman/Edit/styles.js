import styled from 'styled-components';
import { Form } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { darken } from 'polished';

export const Container = styled(Form)`
  flex: 1;
  max-width: 900px;

  strong {
    font-size: 24px;
    color: #444;
    font-weight: bold;
  }
`;

export const UtilBar = styled.div`
  margin-top: 36px;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
  }
`;

export const Button = styled(Link)`
  background: ${(props) => props.background};
  border: 0;
  border-radius: 4px;
  height: 36px;
  overflow: hidden;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  padding: 0 14px;
  align-items: center;
  display: flex;
  transition: background 0.2s;
  margin-left: 8px;

  &:hover {
    background: ${(props) => darken(0.05, props.background)};
  }

  span {
    margin-left: 5px;
  }
`;

export const SubmitButton = styled.button`
  background: ${(props) => props.background};
  border: 0;
  border-radius: 4px;
  height: 36px;
  overflow: hidden;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  padding: 0 14px;
  align-items: center;
  display: flex;
  transition: background 0.2s;
  margin-left: 8px;

  &:hover {
    background: ${(props) => darken(0.05, props.background)};
  }

  span {
    margin-left: 5px;
  }
`;

export const FormContainer = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 30px 30px;
  margin-top: 25px;

  p {
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;
