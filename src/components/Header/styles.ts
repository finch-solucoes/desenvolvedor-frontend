import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 72px 0 48px;
  border-bottom: 1px solid #ccc;
`;

export const InfoPage = styled.div`
  div {
    display: flex;
    align-items: center;
    color: ${colors.darkText};

    h1 {
      display: inline-block;
      font-size: 20px;
    }

    span {
      font-size: 20px;
      font-weight: 200;
      margin-left: 5px;
    }
  }

  small {
    display: block;
    font-size: 14px;
    margin-top: 6px;
  }
`;
