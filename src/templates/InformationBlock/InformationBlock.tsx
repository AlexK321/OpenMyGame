import { FC, useEffect, useState } from 'react';

import { Button } from '../../core/Button';
import { Typography } from '../../core/Typography/Typography';
import { useAppSelector } from '../../store/store';

import { GameBlockContainer, TitleContainer } from './InformationBlock.style';

export const InformationBlock: FC<any> = ({ onWonGame }) => {
  const currentLevel = useAppSelector<any>(state => state.rootReducer.currentLevel);

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
