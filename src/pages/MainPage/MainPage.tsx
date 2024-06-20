import { useState } from 'react';

import { setNextLevel } from '../../store/reducers/root-reducer';
import { useAppDispatch } from '../../store/store';
import { GameBlock } from '../../templates/GameBlock';
import { InformationBlock } from '../../templates/InformationBlock';

import { MainContent, MainWrapper } from './MainPage.style';

export const MainPage = () => {
  const [isGameOpen, setIsGameOpen] = useState(true);
  const dispatch = useAppDispatch();

  const handleWon = () => {
    setIsGameOpen(false);
  };

  const handleNextButtonClick = () => {
    setIsGameOpen(true);
    dispatch(setNextLevel({}));
  };

  return (
    <MainWrapper>
      <MainContent>
        {isGameOpen && <GameBlock onWonGame={handleWon} />}
        {!isGameOpen && <InformationBlock onWonGame={handleNextButtonClick} />}
      </MainContent>
    </MainWrapper>
  );
};
