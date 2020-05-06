import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Switch from 'react-switch';

import productImg from '../../assets/NoPath.png';
import returnImg from '../../assets/return.png';
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

const Product: React.FC = () => {
  const history = useHistory();

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <>
      <Header>
        <BackButton type="button" onClick={handleGoBack}>
          <img src={returnImg} alt="botão para voltar a página" />
        </BackButton>
        <Divider />
        <Info>
          <div>
            <h1>Fone Bluetooth XPTO</h1>
            <div className="product__price">
              <strong>R$ 5.980,00</strong>
              <Favorite>
                <Switch
                  onChange={() => {}}
                  checked={false}
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
          <small>
            Aparelho intra auricular de som em alta definição sem fio para os
            viciados de plantão
          </small>
        </Info>
      </Header>
      <Container>
        <Details>
          <ProductImage>
            <img src={productImg} alt="produto" />
            <div className="tag">Promoção</div>
          </ProductImage>

          <div>
            <Title>Detalhes do Produto</Title>
            <p>
              Os novos fones de ouvido bluetooth XPTO proporcionam o melhor
              cancelamento de ruído da classe e a capacidade de misturar o som
              do ambiente para uma maior consciência dos arredores quando o
              desejar, fazendo dele o fone de ouvido esportivo mais versátil do
              mercado. Projetado para o esporte com um design reflexivo
              exclusivo, os fones de ouvido bluetooth XPTO apresentam o lendário
              som XPTO e um design de ajuste ergonômico que mantém os fones no
              lugar, independentemente da intensidade da rotina de exercícios. À
              prova de suor e disponível em azul, preto, vermelho e
              azul-esverdeado, os fones de ouvido bluetooth XPTO não precisam de
              bateria, pois extraem energia e áudio digital diretamente do
              conector lightning em dispositivos Apple.
            </p>
          </div>
        </Details>
        <Datasheet>
          <Title>Ficha Técnica</Title>
          <hr />
          <ul>
            <li>Lightning connector: Sim</li>
            <li>Lightning connector: Sim</li>
            <li>Lightning connector: Sim</li>
            <li>Lightning connector: Sim</li>
            <li>Lightning connector: Sim</li>
            <li>Lightning connector: Sim</li>
            <li>Lightning connector: Sim</li>
          </ul>
        </Datasheet>
        <FabBackButton type="button" onClick={handleGoBack}>
          <img src={returnImg} alt="botão para voltar a página" />
        </FabBackButton>
      </Container>
    </>
  );
};

export default Product;
