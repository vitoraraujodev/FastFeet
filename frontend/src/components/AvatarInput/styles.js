import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;

  label {
    width: 150px;
    margin: 0 auto;
    display: flex;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    img {
      width: 150px;
      height: 150px;
      border-radius: 75px;
      border: 3px solid #ddd;
      background: #ddd;
    }
    input {
      display: none;
    }
  }
`;

export const DefaultAvatar = styled.div`
  width: 150px;
  height: 150px;
  border: 2px dashed #ddd;
  border-radius: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  b {
    font-size: 16px;
    color: #ddd;
  }
`;
