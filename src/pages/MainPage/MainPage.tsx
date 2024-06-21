import { useState } from 'react';

import { GameBlock } from '../../templates/GameBlock';
import { useGameBlockData } from '../../templates/GameBlock/hooks/useGameBlockData';
import { InformationBlock } from '../../templates/InformationBlock';

import { MainContent, MainWrapper } from './MainPage.style';

export const MainPage = () => {
  const { isStorageChanged, setIsStorageChanged } = useGameBlockData();
  const [isGameOpen, setIsGameOpen] = useState(true);

  const handleWon = () => {
    setIsGameOpen(false);
  };

  const handleNextButtonClick = () => {
    setIsGameOpen(true);
  };

  return (
    <MainWrapper>
      <MainContent>
        {isStorageChanged && <p>Изменения</p>}
        {isGameOpen && <GameBlock onWonGame={handleWon} />}
        {!isGameOpen && <InformationBlock onWonGame={handleNextButtonClick} />}
      </MainContent>
    </MainWrapper>
  );
};
