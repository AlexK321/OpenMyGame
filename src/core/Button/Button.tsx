import { Typography } from '../Typography';

import { StyledButton } from './Button.style';

export const Button = ({ children, ...props }: any) => (
  <StyledButton {...props}>
    <Typography variant="h2">{children}</Typography>
  </StyledButton>
);
