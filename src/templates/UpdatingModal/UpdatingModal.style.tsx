import styled from 'styled-components';

export const UpdatingModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 400px;
  padding: 70px 16px 16px 16px;
  background: white;
  color: ${props => props.theme.colors.darkFont};
  border-radius: 16px;

  & h3 {
    text-align: center;
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: -32px;
  left: 19%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 60%%;
  padding: 16px;
  background: #ec6b3a;
  color: white;
`;
