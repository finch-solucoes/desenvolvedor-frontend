import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useDebounce } from 'use-debounce';

import loupeImg from '../../assets/loupe.png';
import { filterProducts } from '../../store/modules/products/actions';
import { Container } from './styles';

const SearchInput: React.FC = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState<string>('');
  const [debouncedInput] = useDebounce(searchValue, 500);

  useEffect(() => {
    dispatch(filterProducts({ search: debouncedInput }));
  }, [dispatch, debouncedInput]);

  return (
    <Container>
      <img src={loupeImg} alt="botão de busca" />
      <input
        type="text"
        placeholder="Busca"
        onChange={e => setSearchValue(e.target.value)}
      />
    </Container>
  );
};

export default SearchInput;
