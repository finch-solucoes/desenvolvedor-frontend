import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: ${colors.darkText};

  h1 {
    font-size: 5rem;
  }

  p {
    max-width: 150px;
    font-size: 16px;
    margin-left: 16px;
  }
`;
