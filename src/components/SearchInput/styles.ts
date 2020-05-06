import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 445px;
  height: 48px;
  padding: 0 16px;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0px 3px 6px #2959b729;

  img {
    padding-right: 16px;
    border-right: 1px solid #ccc;
  }

  input {
    flex: 1;
    border: 0;
    font-size: 16px;
    padding: 8px 16px;
    background: transparent;
    color: ${colors.grayText};

    &::placeholder {
      color: ${colors.grayText};
    }
  }

  @media (max-width: 1220px) {
    width: 100%;
  }
`;
