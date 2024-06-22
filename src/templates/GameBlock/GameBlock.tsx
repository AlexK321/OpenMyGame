import { FC, useEffect, useState } from 'react';

import { Typography } from '../../core/Typography';
import { setCurrentLevel } from '../../store/reducers/root-reducer';
import { useAppDispatch } from '../../store/store';
import { useDebounce } from '../../utils/useDebounce';
import { UniqueLetters } from '../UniqueLetters';
import { WordsList } from '../WordsList';

import { GameBlockContainer } from './GameBlock.style';
import { useGameBlockData } from './hooks/useGameBlockData';

export const GameBlock: FC<any> = ({ onWonGame }) => {
  const dispatch = useAppDispatch();
  const [trigger, setTrigger] = useState(false);
  const [usersWord, setUsersWord] = useState<string>('');

  const { currentLevel, uniqueLettersCoordinates, currentCheckList, setCurrentCheckList } = useGameBlockData();

  const debounce = useDebounce(usersWord, 1200);

  useEffect(() => {
    setUsersWord('');
  }, [debounce]);

  useEffect(() => {
    if (currentCheckList.find((item: Record<string, any>) => item.word === usersWord)?.isFound === false) {
      setUsersWord('');
      const updatedCurrentCheckList: Record<string, any>[] = currentCheckList.map((item: Record<string, any>) => {
        if (item.word === usersWord) {
          item.isFound = true;
        }

        return item;
      });

      setCurrentCheckList(updatedCurrentCheckList);
      localStorage.setItem('currentCheckList', JSON.stringify(updatedCurrentCheckList));

      if (!updatedCurrentCheckList.find((item: Record<string, any>) => item.isFound === false)) {
        dispatch(setCurrentLevel({ level: currentLevel + 1 }));
        localStorage.setItem('currentLevel', String(currentLevel + 1));
        onWonGame();
        localStorage.setItem('needUpdate', 'true');
        setCurrentCheckList([]);
        localStorage.setItem('currentCheckList', JSON.stringify([]));
      }
    }
  }, [trigger]);

  return (
    <GameBlockContainer>
      <Typography variant="h2">Уровень {currentLevel} </Typography>
      <WordsList currentCheckList={currentCheckList}></WordsList>
      <UniqueLetters
        uniqueLettersCoordinates={uniqueLettersCoordinates}
        usersWord={usersWord}
        setTrigger={setTrigger}
        setUsersWord={setUsersWord}
      />
    </GameBlockContainer>
  );
};
