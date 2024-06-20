import styled from 'styled-components';

export const MainWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${props => props.theme.colors.bg};
  display: flex;
`;

export const MainContent = styled.div`
  margin: auto;
  min-height: calc(100vh - 90px);
  padding: 32px;
  width: 630px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 2px solid ${props => props.theme.colors.lightFont};
  border-radius: 8px;
  color: ${props => props.theme.colors.lightFont};
`;
