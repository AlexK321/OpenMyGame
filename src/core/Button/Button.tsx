import { Typography } from '../Typography';

import { StyledButton } from './Button.style';

export const Button = ({ children, ...props }: any) => (
  <StyledButton {...props}>
    <Typography variant="h3">{children}</Typography>
  </StyledButton>
);
