import React from 'react';

import Menu from '../Menu';
import { Container } from './styles';

const MainLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Menu />

      <section>{children}</section>
    </Container>
  );
};

export default MainLayout;
