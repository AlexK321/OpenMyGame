import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 0 auto;
  height: 100vh;
  padding: 32px;
  max-width: 630px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: ${props => props.theme.colors.bg};
  font-color: ${props => props.theme.colors.lightFont};
`;
