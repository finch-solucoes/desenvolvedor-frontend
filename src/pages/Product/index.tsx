import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Switch from 'react-switch';

import returnImg from '../../assets/return.png';
import { ApplicationState } from '../../store';
import { toggleFavoriteProduct } from '../../store/modules/products/actions';
import { Product } from '../../store/modules/products/types';
import {
  Container,
  Details,
  Datasheet,
  Title,
  Header,
  BackButton,
  FabBackButton,
  Divider,
  Info,
  Favorite,
  ProductImage,
} from './styles';

interface ProductRouteParams {
  id: string;
}

const ProductPage: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<ProductRouteParams>();

  const [product, setProduct] = useState<Product | null>();

  const products = useSelector((state: ApplicationState) => state.products.all);

  useEffect(() => {
    const selectedProduct = products.find(p => p.id === Number(id)) ?? null;

    setProduct(selectedProduct);
  }, [products, id]);

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const handleFavorite = useCallback(() => {
    if (product) {
      dispatch(toggleFavoriteProduct(product));
    }
  }, [dispatch, product]);

  return (
    <>
      <Header>
        <BackButton type="button" onClick={handleGoBack}>
          <img src={returnImg} alt="botão para voltar a página" />
        </BackButton>
        <Divider />
        <Info>
          <div>
            <h1>{product?.nome}</h1>
            <div className="product__price">
              <strong>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(product?.valor || 0)}
              </strong>
              <Favorite>
                <Switch
                  onChange={handleFavorite}
                  checked={product?.favorito || false}
                  width={25}
                  height={12}
                  handleDiameter={8}
                  onColor="#0086F8"
                  offColor="#8E879E"
                  checkedIcon={false}
                  uncheckedIcon={false}
                />
                <span>tornar favorito</span>
              </Favorite>
            </div>
          </div>
          <small>{product?.decricaoCurta}</small>
        </Info>
      </Header>
      <Container>
        <Details>
          <ProductImage>
            <img src={product?.imagem} alt={product?.nome} />
            {product?.promocao && (
              <div className="tag tag--promotion">Promoção</div>
            )}
            {product?.exclusivo && (
              <div className="tag tag--exclusive">Exclusivo</div>
            )}
          </ProductImage>

          <div>
            <Title>Detalhes do Produto</Title>
            <p>{product?.descricaoLonga}</p>
          </div>
        </Details>
        <Datasheet>
          <Title>Ficha Técnica</Title>
          <hr />
          <ul>
            {product?.fichaTecnica.map((info, index) => (
              <li key={String(index)}>
                {info.titulo}: {info.descricao}
              </li>
            ))}
          </ul>
        </Datasheet>
        <FabBackButton type="button" onClick={handleGoBack}>
          <img src={returnImg} alt="botão para voltar a página" />
        </FabBackButton>
      </Container>
    </>
  );
};

export default ProductPage;
