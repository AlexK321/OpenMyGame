import { FC, useEffect, useState } from 'react';

import { Typography } from '../../core/Typography';
import { setCurrentLevel } from '../../store/reducers/root-reducer';
import { useAppDispatch } from '../../store/store';
import { useDebounce } from '../../utils/useDebounce';
import { UniqueLetters } from '../UniqueLetters';
import { WordsList } from '../WordsList';

import { GameBlockContainer } from './GameBlock.style';
import { ICurrentCheckList, useGameBlockData } from './hooks/useGameBlockData';

interface IGameBlock {
  onWonGame: () => void;
}

export const GameBlock: FC<IGameBlock> = ({ onWonGame }) => {
  const dispatch = useAppDispatch();
  const [trigger, setTrigger] = useState(false);
  const [usersWord, setUsersWord] = useState<string>('');
  const USER_LETTER_DELAY = 1200;

  const { currentLevel, uniqueLettersCoordinates, currentCheckList, setCurrentCheckList } = useGameBlockData();

  const debounce = useDebounce(usersWord, USER_LETTER_DELAY);

  useEffect(() => {
    setUsersWord('');
  }, [debounce]);

  useEffect(() => {
    if (currentCheckList.find((item: ICurrentCheckList) => item.word === usersWord)?.isFound === false) {
      setUsersWord('');
      const updatedCurrentCheckList: ICurrentCheckList[] = currentCheckList.map((item: ICurrentCheckList) => {
        if (item.word === usersWord) {
          item.isFound = true;
        }

        return item;
      });

      setCurrentCheckList(updatedCurrentCheckList);
      localStorage.setItem('currentCheckList', JSON.stringify(updatedCurrentCheckList));

      if (!updatedCurrentCheckList.find((item: ICurrentCheckList) => item.isFound === false)) {
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
