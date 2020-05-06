import React from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';

import productImg from '../../assets/NoPath.png';
import { Container } from './styles';

const Card: React.FC = () => {
  return (
    <Container className="card">
      <Link to="/product/1" className="card__header">
        <img src={productImg} alt="produto" />
        <div className="card__tag">Promoção</div>
      </Link>
      <div className="card__body">
        <div>
          <strong className="card__price">R$ 5.698,00</strong>
          <div className="card__favorite">
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
          </div>
        </div>

        <strong className="card__title">Fone Bluetooh XPTO</strong>
        <p className="card__description">
          Aparelho intra auricular de som em alta definição sem fio para os
          viciados de plantão
        </p>
      </div>
    </Container>
  );
};

export default Card;
