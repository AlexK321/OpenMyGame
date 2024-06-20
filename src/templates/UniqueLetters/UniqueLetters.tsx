import { LetterItem } from '../../core/LetterItem';
import { Typography } from '../../core/Typography';

import { LetterWrapper, StyledUniqueLetters, UniqueLettersCircle } from './UniqueLetters.style';

export const UniqueLetters = ({ uniqueLettersCoordinates, usersWord, handleLetterClick }: any = {}) => {
  return (
    <StyledUniqueLetters>
      <UniqueLettersCircle />
      {uniqueLettersCoordinates.map((letterData: Record<string, any>) => (
        <LetterWrapper
          onClick={() => {
            handleLetterClick(letterData.letter);
          }}
          key={letterData.letter}
          top={letterData.y}
          left={letterData.x}
        >
          <LetterItem color={usersWord.split('').includes(letterData.letter) ? '#E96FA4' : 'white'}>
            <Typography variant="h1">{letterData.letter.toUpperCase()}</Typography>
          </LetterItem>
        </LetterWrapper>
      ))}
    </StyledUniqueLetters>
  );
};
