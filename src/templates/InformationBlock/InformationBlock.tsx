import { FC, useEffect, useState } from 'react';

import { Button } from '../../core/Button';
import { Typography } from '../../core/Typography/Typography';
import { useAppSelector } from '../../store/store';

import { GameBlockContainer, TitleContainer } from './InformationBlock.style';

interface IInformationBlock {
  onWonGame: () => void;
}

export const InformationBlock: FC<IInformationBlock> = ({ onWonGame }) => {
  const currentLevel = useAppSelector(state => state.rootReducer.currentLevel);

  return (
    <GameBlockContainer>
      <TitleContainer>
        <Typography variant="h2">Уровень {currentLevel - 1} пройден </Typography>
        <Typography variant="h1">Изумительно! </Typography>
      </TitleContainer>
      <Button onClick={onWonGame}>Уровень {currentLevel}</Button>
    </GameBlockContainer>
  );
};
