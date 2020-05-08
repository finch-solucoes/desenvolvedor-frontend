import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from './styles';

const Page404: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <h1>Ops!</h1>
      <p>{t('PAGE_NOT_FOUND')}</p>
    </Container>
  );
};

export default Page404;
