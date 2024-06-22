import { useState } from 'react';

import { LetterItem } from '../../core/LetterItem';
import { Typography } from '../../core/Typography';
import { darkTheme } from '../../theme';
import { getDeviceType } from '../../utils';
import { UsersWordContainer } from '../GameBlock/GameBlock.style';

import { LetterWrapper, StyledUniqueLetters, UniqueLettersCircle } from './UniqueLetters.style';

export const UniqueLetters = ({ uniqueLettersCoordinates, usersWord, setTrigger, setUsersWord }: any = {}) => {
  const isDesktop = getDeviceType() === 'Desktop';
  const [moveTrigger, setMoveTrigger] = useState(false);

  const handleClick = (letter: string) => {
    setUsersWord(usersWord + letter);
    setTrigger((prev: boolean) => !prev);
  };

  const handleDown = (letter: string) => {
    setUsersWord(letter);
    setMoveTrigger(true);
  };

  const handleMove = (letter: string) => {
    moveTrigger && setUsersWord(usersWord + letter);
  };

  const handleUp = () => {
    setMoveTrigger(false);
    setTrigger((prev: boolean) => !prev);
  };

  return (
    <>
      <UsersWordContainer>
        {usersWord.split('').map((letter: string) => (
          <LetterItem key={letter} size={32}>
            <Typography variant="h2">{letter.toUpperCase()}</Typography>
          </LetterItem>
        ))}
      </UsersWordContainer>
      <StyledUniqueLetters>
        <UniqueLettersCircle />
        {uniqueLettersCoordinates.map((letterData: Record<string, any>) => (
          <LetterWrapper
            onMouseEnter={() => {
              isDesktop && handleMove(letterData.letter);
            }}
            onMouseDown={() => {
              isDesktop && handleDown(letterData.letter);
            }}
            onMouseUp={() => {
              isDesktop && handleUp();
            }}
            onClick={() => {
              !isDesktop && handleClick(letterData.letter);
            }}
            key={letterData.letter}
            top={letterData.y}
            left={letterData.x}
          >
            <LetterItem
              color={usersWord.split('').includes(letterData.letter) ? darkTheme.colors.pink : 'white'}
              size={50}
              isCircle
            >
              <Typography variant="h1">{letterData.letter.toUpperCase()}</Typography>
            </LetterItem>
          </LetterWrapper>
        ))}
      </StyledUniqueLetters>
    </>
  );
};
