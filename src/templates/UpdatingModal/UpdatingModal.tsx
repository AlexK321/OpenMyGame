import { FC } from 'react';

import { ReactComponent as Logo } from '../../assets/popup_ribbon.svg';
import { Button } from '../../core/Button';
import { Typography } from '../../core/Typography/Typography';

import { StyledModalContainer, TitleBG, TitleContainer, UpdatingModalWrapper } from './UpdatingModal.style';

interface IUpdatingModal {
  onModalClick: () => void;
}

export const UpdatingModal: FC<IUpdatingModal> = ({ onModalClick }) => {
  return (
    <UpdatingModalWrapper>
      <StyledModalContainer>
        <TitleBG>
          <Logo style={{ width: '100%', height: '100%' }} />
        </TitleBG>
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
