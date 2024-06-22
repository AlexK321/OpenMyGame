import { LetterItem } from '../../core/LetterItem';
import { Typography } from '../../core/Typography';
import { getDeviceType } from '../../utils';

import { LetterWrapper, StyledUniqueLetters, UniqueLettersCircle } from './UniqueLetters.style';

export const UniqueLetters = ({
  uniqueLettersCoordinates,
  usersWord,
  handleMove,
  handleDown,
  handleUp,
  handleClick,
}: any = {}) => {
  const isDesktop = getDeviceType() === 'Desktop';

  return (
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
            isDesktop && handleUp(letterData.letter);
          }}
          onClick={() => {
            !isDesktop && handleClick(letterData.letter);
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
