import { StyledLetterItem } from './LetterItem.style';

export const LetterItem = ({ color = 'white', size = 44, isCircle, children }: any) => (
  <StyledLetterItem color={color} size={size} isCircle={isCircle}>
    {children}
  </StyledLetterItem>
);
