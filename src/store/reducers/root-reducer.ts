import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers } from '../api/fetchUsers';

const initialState: any = {
  isShowed: true,
  wordsMap: [
    ['брат', 'араб', 'тара', 'бар', 'раб', 'бра'],
    ['минор', 'корм', 'кино', 'мир', 'ком', 'ион', 'ром', 'мор', 'рок', 'инок'],
    ['канон', 'икона', 'цинк', 'кино', 'ион', 'инок'],
  ],
  currentLevel: 1,
};
// eslint-disable-next-line @typescript-eslint/default-param-last
export const showSlice = createSlice({
  name: 'showLogo',
  initialState,
  reducers: {
    showLogo: (state, action) => {
      state.isShowed = action.payload.isShowed;
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

export const { showLogo } = showSlice.actions;

export default showSlice.reducer;
