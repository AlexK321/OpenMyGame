import { StyledLetterItem } from './LetterItem.style';

export const LetterItem = ({ isEmpty, color = 'white', size = 44, isCircle, children }: any) => (
  <StyledLetterItem isEmpty={isEmpty} color={color} size={size} isCircle={isCircle}>
    {children}
  </StyledLetterItem>
);
