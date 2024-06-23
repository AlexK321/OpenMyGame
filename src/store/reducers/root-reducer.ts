import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  wordsMap: string[][];
  currentLevel: number;
}

const initialState: IInitialState = {
  wordsMap: [
    ['брат', 'араб', 'тара', 'бар', 'раб', 'бра'],
    ['минор', 'корм', 'кино', 'мир', 'ком', 'ион', 'ром', 'мор', 'рок', 'инок'],
    ['канон', 'икона', 'цинк', 'кино', 'ион', 'инок'],
  ],
  currentLevel: 1,
};
// eslint-disable-next-line @typescript-eslint/default-param-last
export const rootSlice = createSlice({
  name: 'gameData',
  initialState,
  reducers: {
    setCurrentLevel: (state, action) => {
      state.currentLevel = action.payload.level;
    },
  },
});

export const { setCurrentLevel } = rootSlice.actions;

export default rootSlice.reducer;
