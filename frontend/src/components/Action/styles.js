import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Icon = styled.button`
  background: none;
  border: 0;
  position: relative;
`;

export const Actions = styled.div`
  position: absolute;
  width: 150px;
  left: calc(50% - 75px);
  background: #fff;
  top: 25px;
  border-radius: 4px;
  z-index: 1;
  padding: 15px 8px;
  border: 2px solid #ddd;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: calc(50% - 8px);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #ddd;
  }
`;

export const Action = styled.div`
  width: 85%;
  cursor: pointer;
  text-align: left;
  padding: 8px 6px;

  & + div {
    border-top: 1px solid #ddd;
  }

  span {
    color: #999;
    font-size: 16px;
    margin-left: 8px;
    cursor: pointer;
  }
  &:hover {
    background: #f5f5f5;
  }
`;
