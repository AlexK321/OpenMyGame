import { useEffect, useState } from 'react';

import { setCurrentLevel } from '../../../store/reducers/root-reducer';
import { useAppDispatch, useAppSelector } from '../../../store/store';

export interface ICurrentCheckList {
  word: string;
  isFound: boolean;
}

export const useGameBlockData = () => {
  const dispatch = useAppDispatch();
  const UNIQUE_LETTERS_RADIUS = 93;
  const [isStorageChanged, setIsStorageChanged] = useState(false);
  const currentLevel = useAppSelector<number>(state => state.rootReducer.currentLevel);
  const wordsMap = useAppSelector<string[][]>(state => state.rootReducer.wordsMap);
  const currentList = wordsMap[(currentLevel % 3 || 3) - 1];
  const [currentCheckList, setCurrentCheckList] = useState<ICurrentCheckList[]>(
    currentList.map((item: string) => ({ word: item, isFound: false })),
  );

  const uniqueLetters = currentList
    .reduce((acc: string, item: string) => acc.concat(item), '')
    .split('')
    .reduce((acc: string[], item: string) => {
      if (acc.indexOf(item) === -1) {
        acc.push(item);
      }
      return acc;
    }, []);

  const uniqueLettersCoordinates = uniqueLetters.map((item: string, index: number) => {
    const angle = (360 / uniqueLetters.length) * index;

    return {
      letter: item,
      x: Math.cos((angle * Math.PI) / 180) * UNIQUE_LETTERS_RADIUS + 0.75 * UNIQUE_LETTERS_RADIUS,
      y: Math.sin((angle * Math.PI) / 180) * UNIQUE_LETTERS_RADIUS + 0.75 * UNIQUE_LETTERS_RADIUS,
    };
  });

  useEffect(() => {
    if (localStorage.getItem('currentLevel')) {
      dispatch(setCurrentLevel({ level: Number(localStorage.getItem('currentLevel')) }));
    } else {
      localStorage.setItem('currentLevel', String(currentLevel));
    }

    if (JSON.parse(localStorage.getItem('currentCheckList') || '[]').length) {
      setCurrentCheckList(JSON.parse(localStorage.getItem('currentCheckList') || '[]'));
    } else {
      localStorage.setItem('currentCheckList', JSON.stringify(currentCheckList));
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('needUpdate') === 'true') {
      setCurrentCheckList(currentList.map((item: string) => ({ word: item, isFound: false })));
      localStorage.setItem('needUpdate', 'false');
    }
  }, [currentCheckList.length, currentLevel, currentList]);

  window.addEventListener('storage', () => {
    setIsStorageChanged(true);
  });

  return {
    currentLevel,
    uniqueLettersCoordinates,
    currentCheckList,
    setCurrentCheckList,
    isStorageChanged,
    setIsStorageChanged,
  };
};
