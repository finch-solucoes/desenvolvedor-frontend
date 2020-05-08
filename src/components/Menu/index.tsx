import React from 'react';
import { useTranslation } from 'react-i18next';

import boxImg from '../../assets/images/box.png';
import codeImg from '../../assets/images/code.png';
import finchImg from '../../assets/images/finch.png';
import giftBoxImg from '../../assets/images/gift-box.png';
import recommendedImg from '../../assets/images/recommended.png';
import suppliesImg from '../../assets/images/supplies.png';
import { Container, FinchLogo, Item, Logo } from './styles';

const Menu: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Logo>
        <img src={codeImg} alt="home" />
      </Logo>
      <Item to="/" exact>
        <img src={suppliesImg} alt={t('IMG_ALT.ICON_ALL')} />
        <strong>{t('MENU.ALL')}</strong>
      </Item>
      <Item to="/exclusives">
        <img src={boxImg} alt={t('IMG_ALT.ICON_EXCLUSIVE')} />
        <strong>{t('MENU.EXCLUSIVES')}</strong>
      </Item>
      <Item to="/promotion">
        <img src={giftBoxImg} alt={t('IMG_ALT.ICON_PROMOTION')} />
        <strong>{t('MENU.PROMOTION')}</strong>
      </Item>
      <Item to="/favorites">
        <img src={recommendedImg} alt={t('IMG_ALT.ICON_FAVORITE')} />
        <strong>{t('MENU.FAVORITES')}</strong>
      </Item>

      <FinchLogo>
        <img src={finchImg} alt="Finch" />
      </FinchLogo>
    </Container>
  );
};

export default Menu;
