import { useEffect, useState } from 'react';

import { LetterItem } from '../../core/LetterItem';
import { Typography } from '../../core/Typography';
import { UniqueLetters } from '../UniqueLetters';
import { WordsList } from '../WordsList';

import { GameBlockContainer, UsersWordContainer } from './GameBlock.style';
import { useGameBlockData } from './hooks/useGameBlockData';

export const GameBlock = () => {
  const [usersWord, setUsersWord] = useState<string>('');

  const { currentLevel, currentList, uniqueLettersCoordinates } = useGameBlockData();

  const [currentCheckList, setCurrentCheckList] = useState<Record<string, any>[]>(
    currentList.map((word: string) => ({ word: word, isFound: false })),
  );

  const handleLetterClick = (letter: string) => {
    setUsersWord;

    if (usersWord.length < 4) {
      setUsersWord(usersWord + letter);
    } else {
      setUsersWord('');
    }
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
        console.log('You won!');
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
