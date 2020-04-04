import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.background};
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 120px;
  padding: 4px 7px;

  b {
    color: ${(props) => props.color};
    font-size: 14px;
    margin-left: 5px;
  }
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: ${(props) => props.background};
`;
