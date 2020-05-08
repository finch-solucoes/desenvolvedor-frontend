import styled, { css } from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 72px 0 48px;
  border-bottom: 1px solid #ccc;

  .header__search {
    display: flex;
    align-items: center;
  }

  .header__flags {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
  }

  @media (max-width: 1220px) {
    flex-direction: column;
  }
`;

interface FlagButtonProps {
  active: boolean;
}

export const FlagButton = styled.button<FlagButtonProps>`
  border: 0;
  background: transparent;

  ${props =>
    !props.active &&
    css`
      img {
        filter: grayscale(1);
        opacity: 0.6;
      }
    `}
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

    @media (max-width: 800px) {
      flex-direction: column;
      align-items: flex-start;

      span {
        margin-left: 0;
      }
    }
  }

  small {
    display: block;
    font-size: 14px;
    margin-top: 6px;
  }

  @media (max-width: 1220px) {
    margin-bottom: 24px;
  }
`;
