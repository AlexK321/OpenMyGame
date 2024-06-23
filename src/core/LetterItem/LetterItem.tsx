import { FC } from 'react';

import { StyledLetterItem } from './LetterItem.style';

interface ILetterItem {
  color?: string;
  size?: number;
  isCircle?: boolean;
  children?: JSX.Element;
}

export const LetterItem: FC<ILetterItem> = ({ color = 'white', size = 44, isCircle = false, children }) => (
  <StyledLetterItem color={color} size={size} isCircle={isCircle}>
    {children}
  </StyledLetterItem>
);
