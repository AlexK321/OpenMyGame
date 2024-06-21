import { FC, useEffect, useState } from 'react';

import { LetterItem } from '../../core/LetterItem';
import { Typography } from '../../core/Typography';
import { setCurrentLevel } from '../../store/reducers/root-reducer';
import { useAppDispatch } from '../../store/store';
import { UniqueLetters } from '../UniqueLetters';
import { WordsList } from '../WordsList';

import { GameBlockContainer, UsersWordContainer } from './GameBlock.style';
import { useGameBlockData } from './hooks/useGameBlockData';

export const GameBlock: FC<any> = ({ onWonGame }) => {
  const dispatch = useAppDispatch();
  const [usersWord, setUsersWord] = useState<string>('');

  const { currentLevel, uniqueLettersCoordinates, currentCheckList, setCurrentCheckList } = useGameBlockData();

  const handleLetterClick = (letter: string) => {
    setUsersWord(usersWord.length < 5 ? usersWord + letter : '');
  };

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

      if (!updatedCurrentCheckList.find((item: Record<string, any>) => item.isFound === false)) {
        dispatch(setCurrentLevel({ level: currentLevel + 1 }));
        localStorage.setItem('currentLevel', String(currentLevel + 1));
        onWonGame();
        localStorage.setItem('needUpdate', 'true');
        setCurrentCheckList([]);
        localStorage.setItem('currentCheckList', JSON.stringify([]));
      }
    }
  }, [usersWord]);

  return (
    <GameBlockContainer>
      <Typography variant="h2">Уровень {currentLevel} </Typography>
      <WordsList currentCheckList={currentCheckList}></WordsList>
      <UsersWordContainer>
        {usersWord.split('').map(letter => (
          <LetterItem key={letter}>
            <Typography variant="h1">{letter}</Typography>
          </LetterItem>
        ))}
      </UsersWordContainer>
      <UniqueLetters
        uniqueLettersCoordinates={uniqueLettersCoordinates}
        usersWord={usersWord}
        handleLetterClick={handleLetterClick}
      />
    </GameBlockContainer>
  );
};
