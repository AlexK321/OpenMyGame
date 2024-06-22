import styled from 'styled-components';

export const MainWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${props => props.theme.colors.bg};
  display: flex;
`;

export const MainContent = styled.div`
  margin: 10px auto;
  padding: 16px 32px;
  width: 630px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 2px solid ${props => props.theme.colors.lightFont};
  border-radius: 8px;
  color: ${props => props.theme.colors.lightFont};

  @media (max-width: 630px) {
    width: 100%;
    padding: 0 16px 16px;
    border: 0 solid white;
    margin: 0 auto;
  }
`;
