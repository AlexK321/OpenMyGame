import { FC } from 'react';

import { Button } from '../../core/Button';
import { Typography } from '../../core/Typography/Typography';

import { StyledModalContainer, TitleContainer, UpdatingModalWrapper } from './UpdatingModal.style';

export const UpdatingModal: FC<any> = ({ onModalClick }) => {
  return (
    <UpdatingModalWrapper>
      <StyledModalContainer>
        <TitleContainer>
          <Typography variant="h2">Две вкладки с игрой? </Typography>
        </TitleContainer>
        <Typography variant="h3">
          Похоже, игра открыта в нескольких вкладках браузера. Чтобы продолжить играть в этой вкладке, обновите
          страницу.
        </Typography>
        <Button onClick={onModalClick}>Обновить </Button>
      </StyledModalContainer>
    </UpdatingModalWrapper>
  );
};
