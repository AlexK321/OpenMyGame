import { LetterItem } from '../../core/LetterItem';
import { Typography } from '../../core/Typography';

import { WordContainer } from './WordsList.style';

export const WordsList = ({ currentCheckList }: any = {}) => {
  return (
    <>
      {currentCheckList.map((item: Record<string, any>) => {
        const isFound = item.isFound;
        return (
          <WordContainer key={item.word}>
            {item.word.split('').map((letter: string, index: number) => (
              <LetterItem key={letter + index} color={isFound ? '#65BD65' : 'white'}>
                <Typography variant="h1">{isFound && letter.toLocaleUpperCase()}</Typography>
              </LetterItem>
            ))}
          </WordContainer>
        );
      })}
    </>
  );
};
