import styled, { css } from 'styled-components';

import colors from '../../styles/colors';

interface ContainerProps {
  isPromotion: boolean;
  isExclusive: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 10px 20px #16319b29;
  text-decoration: none;
  overflow: hidden;

  .card__header {
    display: flex;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: transform 1s ease-in-out;
    }
  }

  .card__tag {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    padding: 4px 16px;
    background: transparent linear-gradient(125deg, #ef0e5a 0%, #55118f 100%) 0%
      0% no-repeat padding-box;

    ${props =>
      props.isExclusive &&
      css`
        background: transparent
          linear-gradient(125deg, #1db6ce 0%, #182ac9 100%) 0% 0% no-repeat
          padding-box;
      `}
  }

  .card__body {
    flex: 1;
    padding: 16px 24px;

    > div {
      display: flex;
      justify-content: space-between;

      .card__price {
        color: #5e3ba5;
        font-size: 20px;
      }

      .card__favorite {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        color: ${colors.text};

        > span {
          margin-left: 5px;
        }
      }
    }

    .card__title {
      display: block;
      margin: 8px 0;
      font-size: 20px;
      color: ${colors.darkText};
      transition: color 0.2s ease;
    }

    .card__description {
      color: ${colors.text};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; /* number of lines to show */
    }
  }

  &:hover {
    img {
      transform: scale(1.1);
    }

    .card__title {
      color: ${colors.primary};
    }
  }
`;

export const CardGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-gap: 64px;
`;
