import styled from 'styled-components';

export const StyledLetterItem = styled.div<{ isEmpty: boolean; color: string; size: number; isCircle: boolean }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => (props.isCircle ? '50%' : '30%')};
  background-color: ${props => props.color};
  color: ${props => (props.color === 'white' ? props.theme.colors.darkFont : 'white')};
  padding: 6px;

  @media (max-width: 430px) {
    width: ${props => props.size * 0.8}px;
    height: ${props => props.size * 0.8}px;
  }
`;
