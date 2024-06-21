import { useState } from 'react';

import { setCurrentLevel } from '../../store/reducers/root-reducer';
import { useAppDispatch } from '../../store/store';
import { GameBlock } from '../../templates/GameBlock';
import { useGameBlockData } from '../../templates/GameBlock/hooks/useGameBlockData';
import { InformationBlock } from '../../templates/InformationBlock';
import { UpdatingModal } from '../../templates/UpdatingModal';

import { MainContent, MainWrapper } from './MainPage.style';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { isStorageChanged, setIsStorageChanged, setCurrentCheckList } = useGameBlockData();
  const [isGameOpen, setIsGameOpen] = useState(true);

  const handleWon = () => {
    setIsGameOpen(false);
  };

  const handleNextButtonClick = () => {
    setIsGameOpen(true);
  };

  const handleUpdateClick = () => {
    dispatch(setCurrentLevel({ level: Number(localStorage.getItem('currentLevel')) || 1 }));
    setCurrentCheckList(JSON.parse(localStorage.getItem('currentCheckList') || '[]'));
    setIsStorageChanged(false);
  };

  return (
    <MainWrapper>
      <MainContent>
        {isGameOpen && <GameBlock onWonGame={handleWon} />}
        {!isGameOpen && <InformationBlock onWonGame={handleNextButtonClick} />}
        {isStorageChanged && <UpdatingModal onModalClick={handleUpdateClick} />}
      </MainContent>
    </MainWrapper>
  );
};
