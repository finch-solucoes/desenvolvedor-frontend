import React, { useMemo, memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';

import { toggleFavoriteProduct } from '../../store/modules/products/actions';
import { Product } from '../../store/modules/products/types';
import { Container } from './styles';

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const formatedPrice = useMemo(
    () =>
      Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(product.valor),
    [product.valor],
  );

  const handleFavorite = useCallback(() => {
    dispatch(toggleFavoriteProduct(product));
  }, [dispatch, product]);

  return (
    <Container
      className="card"
      isPromotion={product.promocao}
      isExclusive={product.exclusivo}
    >
      <Link to={`/product/${product.id}`} className="card__header">
        <img src={product.imagem} alt={product.nome} />
        {product.promocao && <div className="card__tag">Promoção</div>}
        {product.exclusivo && <div className="card__tag">Exclusivo</div>}
      </Link>
      <div className="card__body">
        <div>
          <strong className="card__price">{formatedPrice}</strong>
          <div className="card__favorite">
            <Switch
              onChange={handleFavorite}
              checked={product.favorito}
              width={25}
              height={12}
              handleDiameter={8}
              onColor="#0086F8"
              offColor="#8E879E"
              checkedIcon={false}
              uncheckedIcon={false}
            />
            <span>tornar favorito</span>
          </div>
        </div>

        <strong className="card__title">{product.nome}</strong>
        <p className="card__description">{product.decricaoCurta}</p>
      </div>
    </Container>
  );
};

export default memo(Card);
