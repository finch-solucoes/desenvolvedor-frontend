import React, { memo } from 'react';

import SearchInput from '../SearchInput';
import { Container, InfoPage } from './styles';

interface HeaderProps {
  title: string;
  subTitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subTitle }) => {
  return (
    <Container>
      <InfoPage>
        <div>
          <h1>Empresa XPTO</h1>
          <span>{title}</span>
        </div>
        <small>{subTitle} </small>
      </InfoPage>
      <SearchInput />
    </Container>
  );
};

export default memo(Header);
