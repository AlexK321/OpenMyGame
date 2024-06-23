import { FC } from 'react';

import { Typography } from '../Typography';

import { StyledButton } from './Button.style';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export const Button: FC<IButton> = ({ ...props }) => (
  <StyledButton {...props}>
    <Typography variant="h2">{props.children}</Typography>
  </StyledButton>
);
