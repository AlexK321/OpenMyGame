import styled from 'styled-components';

export const StyledUniqueLetters = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #3e4a68;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const UniqueLettersCircle = styled.div`
  width: 83%;
  height: 83%;
  margin: auto;
  border-radius: 50%;
  background: ${props => props.theme.colors.bg};
`;

export const LetterWrapper = styled.div<{ top: number; left: number }>`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  cursor: pointer;
`;
