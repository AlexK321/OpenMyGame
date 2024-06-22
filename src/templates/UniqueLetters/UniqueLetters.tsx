import { LetterItem } from '../../core/LetterItem';
import { Typography } from '../../core/Typography';

import { LetterWrapper, StyledUniqueLetters, UniqueLettersCircle } from './UniqueLetters.style';

export const UniqueLetters = ({
  uniqueLettersCoordinates,
  usersWord,
  handleLetterClick,
  handleDown,
  handleUp,
}: any = {}) => {
  return (
    <StyledUniqueLetters>
      <UniqueLettersCircle />
      {uniqueLettersCoordinates.map((letterData: Record<string, any>) => (
        <LetterWrapper
          onMouseEnter={() => {
            handleLetterClick(letterData.letter);
          }}
          onMouseDown={() => {
            handleDown(letterData.letter);
          }}
          onMouseUp={() => {
            handleUp(letterData.letter);
          }}
          onTouchStart={() => {
            handleDown(letterData.letter);
          }}
          onTouchMove={() => {
            handleLetterClick(letterData.letter);
          }}
          onTouchEnd={() => {
            handleUp(letterData.letter);
          }}
          key={letterData.letter}
          top={letterData.y}
          left={letterData.x}
        >
          <LetterItem color={usersWord.split('').includes(letterData.letter) ? '#E96FA4' : 'white'} size={50} isCircle>
            <Typography variant="h1">{letterData.letter.toUpperCase()}</Typography>
          </LetterItem>
        </LetterWrapper>
      ))}
    </StyledUniqueLetters>
  );
};
