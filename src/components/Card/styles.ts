import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
      object-fit: cover;
      transition: transform 1s ease-in-out;
    }
  }

  .carad__tag {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    padding: 4px 16px;
    background: transparent linear-gradient(125deg, #ef0e5a 0%, #55118f 100%) 0%
      0% no-repeat padding-box;

    /* background: transparent linear-gradient(125deg, #1DB6CE 0%, #182AC9 100%) 0% 0% no-repeat padding-box; */
  }

  .card__body {
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
