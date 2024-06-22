import { LetterItem } from '../../core/LetterItem';
import { Typography } from '../../core/Typography';
import { darkTheme } from '../../theme';

import { StyledWordList, WordContainer } from './WordsList.style';

export const WordsList = ({ currentCheckList }: any = {}) => {
  return (
    <StyledWordList>
      {currentCheckList
        .sort((a: Record<string, any>, b: Record<string, any>) => a.word.length - b.word.length)
        .map((item: Record<string, any>) => {
          const isFound = item.isFound;
          return (
            <WordContainer key={item.word}>
              {item.word.split('').map((letter: string, index: number) => (
                <LetterItem key={letter + index} color={isFound ? darkTheme.colors.btn : 'white'}>
                  <Typography variant="h1">{isFound && letter.toLocaleUpperCase()}</Typography>
                </LetterItem>
              ))}
            </WordContainer>
          );
        })}
    </StyledWordList>
  );
};
