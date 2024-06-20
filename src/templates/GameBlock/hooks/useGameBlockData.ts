import { useAppSelector } from '../../../store/store';

export const useGameBlockData = () => {
  const UNIQUE_LETTERS_RADIUS = 93;
  const currentLevel = useAppSelector<any>(state => state.rootReducer.currentLevel) % 3;
  const wordsMap = useAppSelector<any>(state => state.rootReducer.wordsMap);

  const currentList = wordsMap[currentLevel - 1];
  const uniqueLetters = currentList
    .reduce((acc: string, item: string) => acc.concat(item), '')
    .split('')
    .reduce((acc: any, item: string) => {
      if (acc.indexOf(item) === -1) {
        acc.push(item);
      }
      return acc;
    }, []);

  const uniqueLettersCoordinates = uniqueLetters.map((item: string, index: number) => {
    const angle = (360 / uniqueLetters.length) * index;

    return {
      letter: item,
      x: Math.cos((angle * Math.PI) / 180) * UNIQUE_LETTERS_RADIUS + 0.87 * UNIQUE_LETTERS_RADIUS,
      y: Math.sin((angle * Math.PI) / 180) * UNIQUE_LETTERS_RADIUS + 0.87 * UNIQUE_LETTERS_RADIUS,
    };
  });
  return { currentLevel, currentList, uniqueLettersCoordinates };
};
