import { FC } from 'react';

import { LetterItem } from '../../core/LetterItem';
import { Typography } from '../../core/Typography';
import { darkTheme } from '../../theme';
import { ICurrentCheckList } from '../GameBlock/hooks/useGameBlockData';

import { StyledWordList, WordContainer } from './WordsList.style';

interface IWordsList {
  currentCheckList: ICurrentCheckList[];
}

export const WordsList: FC<IWordsList> = ({ currentCheckList = [] }) => {
  return (
    <StyledWordList>
      {currentCheckList
        .sort((a: ICurrentCheckList, b: ICurrentCheckList) => a.word.length - b.word.length)
        .map((item: ICurrentCheckList) => {
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
