import React from 'react';

import boxImg from '../../assets/box.png';
import codeImg from '../../assets/code.png';
import finchImg from '../../assets/finch.png';
import giftBoxImg from '../../assets/gift-box.png';
import recommendedImg from '../../assets/recommended.png';
import suppliesImg from '../../assets/supplies.png';
import { Container, FinchLogo, Item, Logo } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={codeImg} alt="logo home" />
      </Logo>
      <Item to="/" exact>
        <img src={suppliesImg} alt="ícone todos os produtos" />
        <strong>Todos</strong>
      </Item>
      <Item to="/exclusives">
        <img src={boxImg} alt="ícone produtos exclusivos" />
        <strong>Exclusivos</strong>
      </Item>
      <Item to="/promotion">
        <img src={giftBoxImg} alt="ícone produtos em promoção" />
        <strong>Promoção</strong>
      </Item>
      <Item to="/favorites">
        <img src={recommendedImg} alt="ícone produtos favoritos" />
        <strong>Favoritos</strong>
      </Item>

      <FinchLogo>
        <img src={finchImg} alt="logo Finch" />
      </FinchLogo>
    </Container>
  );
};

export default Menu;
