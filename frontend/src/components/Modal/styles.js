import styled from 'styled-components';

export const Container = styled.div``;

export const Background = styled.div`
  position: absolute;
  background: #000;
  opacity: 0.7;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  width: 450px;
  left: calc(50% - 225px);
  height: 100%;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  z-index: 2;
`;

export const ModalContainer = styled.div`
  width: 450px;

  padding: 25px 30px;

  margin: auto;

  background: #fff;
  box-shadow: 0px 2px 10px #00000033;
  border-radius: 4px;

  p {
    font-size: 14px;
    font-weight: bold;
    margin: 12px 0;
    padding-top: 12px;
    border-top: 1px solid #ddd;
    color: #444;

    &:first-child {
      border: 0;
    }
  }

  span {
    color: #666;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.3px;
  }

  b {
    color: #666;
  }
  img {
    max-width: 390px;
  }
`;
