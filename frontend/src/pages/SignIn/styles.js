import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  height: 100%;
  background-color: #7d40e7;

  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  padding: 40px 30px;

  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 260px;
  margin: 15px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const TextLabel = styled.p`
  text-align: left;
  margin: 10px 0;

  font-size: 14px;
  font-weight: bold;
  color: #444444;
  letter-spacing: 0px;
`;

export const Input = styled.input`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 40px;
  padding: 0 15px;
  color: #333;
  width: 300px;
  margin: 0 0 10px;
  &::placeholder {
    color: #999;
  }
`;

export const SubmitButton = styled.button`
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
  }
`;
