import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  position: relative;
  margin: 64px 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 72px 0 48px;
  border-bottom: 1px solid #ccc;
`;

export const BackButton = styled.button`
  border: 0;
  margin: 0;
  width: 52px;
  height: 52px;
  min-width: 52px;
  min-height: 52px;
  border-radius: 50%;
  background-color: transparent;
  transition: background-color 0.5 ease-in;

  &:hover {
    background-color: #e2e2e2;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const FabBackButton = styled.button`
  position: fixed;
  border: 0;
  margin: 0;
  bottom: 16px;
  right: 16px;
  width: 52px;
  height: 52px;
  min-width: 52px;
  min-height: 52px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 10px 20px #16319b29;
  z-index: 5;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const Divider = styled.div`
  height: 52px;
  width: 1px;
  background: #ccc;
  margin: 0 24px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Info = styled.div`
  div {
    display: flex;
    align-items: center;
    color: ${colors.darkText};

    h1 {
      display: inline-block;
      font-size: 20px;
    }

    strong {
      font-size: 20px;
      margin: 0 16px;
      color: #5e3ba5;
    }

    @media (max-width: 900px) {
      strong {
        margin-left: 0;
      }
    }

    @media (max-width: 500px) {
      .product__price {
        flex-direction: column;
      }
    }
  }

  small {
    display: block;
    font-size: 14px;
    margin-top: 6px;
  }

  @media (max-width: 900px) {
    > div {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const Favorite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-left: 5px;
    color: ${colors.text};
  }
`;

export const Title = styled.h1`
  color: ${colors.darkText};
  font-size: 20px;
  margin-bottom: 24px;
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: 360px 1fr;
  grid-gap: 48px;

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`;

export const Datasheet = styled.div`
  margin-top: 40px;

  hr {
    border: 0;
    border-bottom: 1px solid #ccc;
    margin-bottom: 24px;
  }

  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 8px;

    li {
      margin-left: 20px;
    }
  }
`;

export const ProductImage = styled.div`
  display: flex;
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0px 10px 20px #16319b29;

  img {
    width: 100%;
    object-fit: cover;
    transition: transform 1s ease-in-out;
  }

  .tag {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    padding: 4px 16px;
    background: transparent linear-gradient(125deg, #ef0e5a 0%, #55118f 100%) 0%
      0% no-repeat padding-box;

    /* background: transparent linear-gradient(125deg, #1DB6CE 0%, #182AC9 100%) 0% 0% no-repeat padding-box; */
  }
`;
