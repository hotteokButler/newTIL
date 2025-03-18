import { createSlice } from '@reduxjs/toolkit';

const initialState = { data: null };

export const selectedQuestionSlice = createSlice({
  name: 'selectedQuestion',
  initialState,
  reducers: {
    setSelectedQuestionSlice: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setSelectedQuestionSlice } = selectedQuestionSlice.actions;
export default selectedQuestionSlice.reducer;
