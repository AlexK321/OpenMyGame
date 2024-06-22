import { useState } from 'react';

import { GameBlock } from '../../templates/GameBlock';
import { useGameBlockData } from '../../templates/GameBlock/hooks/useGameBlockData';
import { InformationBlock } from '../../templates/InformationBlock';
import { UpdatingModal } from '../../templates/UpdatingModal';

import { MainContent, MainWrapper } from './MainPage.style';

export const MainPage = () => {
  const { isStorageChanged } = useGameBlockData();
  const [isGameOpen, setIsGameOpen] = useState(true);

  const handleWon = () => {
    setIsGameOpen(false);
  };

  const handleNextButtonClick = () => {
    setIsGameOpen(true);
  };

  const handleUpdateClick = () => {
    window.location.reload();
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
