import React from 'react';

import loupeImg from '../../assets/loupe.png';
import { Container } from './styles';

const SearchInput: React.FC = () => {
  return (
    <Container>
      <img src={loupeImg} alt="botão de busca" />
      <input type="text" placeholder="Busca" />
    </Container>
  );
};

export default SearchInput;
