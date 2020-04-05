import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  max-width: 1440px;

  strong {
    font-size: 24px;
    color: #444;
    font-weight: bold;
  }
`;

export const Table = styled.table`
  width: 100%;
  overflow-x: auto;
  border-collapse: separate;
  border-spacing: 0 16px;
  margin-top: 30px;

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
    padding: 18px 25px;

    img {
      width: 36px;
      height: 36px;
      border-radius: 18px;
    }
  }
`;
