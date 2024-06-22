import styled from 'styled-components';

export const StyledButton = styled.button`
  color: white;
  background: ${props => props.theme.colors.btn};
  border-radius: 30px;
  padding: 12px 30px;
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.btn};

  & h2 {
    margin: 0;
  }
`;
