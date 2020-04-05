import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  flex: 1;
  max-width: 1440px;

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
`;

export const Input = styled.div`
  width: 236px;
  height: 36px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 12px;

  input {
    color: #444;
    height: 32px;
    border: none;
    margin-left: 6px;
    font-size: 14px;
    &::placeholder {
      color: #999;
    }
  }
`;

export const Button = styled.button`
  background: #7d40e7;
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
  &:hover {
    background: ${darken(0.05, '#7D40E7')};
  }
`;

export const Table = styled.table`
  width: 100%;
  overflow-x: auto;
  border-collapse: separate;
  border-spacing: 0 16px;
  margin-top: 12px;

  th {
    color: #444;
    font-size: 16px;
    padding: 0 25px;
  }

  tbody tr {
    background: #fff;
  }
  td {
    border-radius: 4px;
    font-size: 16px;
    color: #666;
    padding: 10px 25px;

    img {
      width: 36px;
      height: 36px;
      border-radius: 18px;
    }
  }
`;
