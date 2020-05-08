import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { useDebounce } from 'use-debounce';

import loupeImg from '../../assets/images/loupe.png';
import { filterProducts } from '../../store/modules/products/actions';
import { Container } from './styles';

const SearchInput: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [searchValue, setSearchValue] = useState<string>('');
  const [debouncedInput] = useDebounce(searchValue, 500);

  useEffect(() => {
    dispatch(filterProducts({ search: debouncedInput }));
  }, [dispatch, debouncedInput]);

  return (
    <Container>
      <img src={loupeImg} alt={t('IMG_ALT.ICON_SEARCH')} />
      <input
        type="text"
        placeholder={t('SEARCH.PLACEHOLDER')}
        onChange={e => setSearchValue(e.target.value)}
      />
    </Container>
  );
};

export default SearchInput;
