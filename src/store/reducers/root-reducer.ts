import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers } from '../api/fetchUsers';

const initialState: any = {
  wordsMap: [
    ['брат', 'бра'],
    ['минор', 'корм', 'инок'],
    ['канон', 'икона'],
  ],
  // wordsMap: [
  //   ['брат', 'араб', 'тара', 'бар', 'раб', 'бра'],
  //   ['минор', 'корм', 'кино', 'мир', 'ком', 'ион', 'ром', 'мор', 'рок', 'инок'],
  //   ['канон', 'икона', 'цинк', 'кино', 'ион', 'инок'],
  // ],
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
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { setCurrentLevel } = rootSlice.actions;

export default rootSlice.reducer;
