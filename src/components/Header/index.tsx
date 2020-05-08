import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import flagBrImg from '../../assets/images/flag-br.svg';
import flagUsaImg from '../../assets/images/flag-usa.svg';
import SearchInput from '../SearchInput';
import { Container, FlagButton, InfoPage } from './styles';

interface HeaderProps {
  title: string;
  subTitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subTitle }) => {
  const { t, i18n } = useTranslation();

  const currentLanguage = useMemo(() => i18n.language, [i18n.language]);

  const changeLanguage = useCallback(
    (lng: string) => i18n.changeLanguage(lng),
    [i18n],
  );

  return (
    <Container>
      <InfoPage>
        <div>
          <h1>Empresa XPTO</h1>
          <span>{title}</span>
        </div>
        <small>{subTitle} </small>
      </InfoPage>
      <div className="header__search">
        <SearchInput />
        <div className={`header__flags `}>
          <FlagButton
            type="button"
            active={currentLanguage === 'pt-BR'}
            onClick={() => changeLanguage('pt-BR')}
          >
            <img src={flagBrImg} alt={t('IMG_ALT.FLAG_BR')} height={20} />
          </FlagButton>
          <FlagButton
            type="button"
            active={currentLanguage === 'en'}
            onClick={() => changeLanguage('en')}
          >
            <img src={flagUsaImg} alt={t('IMG_ALT.FLAG_USA')} height={20} />
          </FlagButton>
        </div>
      </div>
    </Container>
  );
};

export default memo(Header);
