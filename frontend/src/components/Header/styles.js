import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-bottom: 1px solid #ddd;
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    a {
      font-size: 18px;
      font-weight: bold;
      margin-right: 24px;
      color: #999;
    }
  }
  aside {
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-right: 30px;

    strong {
      font-size: 14px;
      margin-bottom: 2px;
    }
    span {
      margin-top: 2px;
      font-size: 14px;
      color: #de3b3b;
      cursor: pointer;
    }
  }
`;

export const Logo = styled.div`
  padding-right: 30px;
  margin: 0 30px;
  border-right: 1px solid #ddd;

  img {
    width: 135px;
  }
`;
