import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  section {
    flex: 1;
    padding: 0 64px 0 226px;

    @media (max-width: 800px) {
      padding: 0 24px;
      margin-top: 40px;
    }
  }
`;
