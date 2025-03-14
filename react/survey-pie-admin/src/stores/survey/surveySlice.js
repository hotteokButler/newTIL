import { createSlice } from '@reduxjs/toolkit';

const initialState = { data: null };

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.data.title = action.payload;
    },
    addQuestion: (state, action) => {
      const type = action.payload;

      let options;

      if (type === 'text' || type === 'textarea') {
        options = {
          max: 20,
          paceholder: '',
        };
      } else if (type === 'select') {
        options = {
          max: 1,
          items: ['option01', 'option02', 'option03', 'option04', 'option05'],
        };
      }

      state.data.questions.push({
        title: 'Untitled',
        type,
        required: false,
        options,
      });
    },
    moveUpQuestion: (state, action) => {
      const index = action.payload;
      const temp = state.data.questions[index];
      state.data.questions[index] = state.data.questions[index - 1];
      state.data.questions[index - 1] = temp;
    },
    moveDownQuestion: (state, action) => {
      const index = action.payload;
      const temp = state.data.questions[index];
      state.data.questions[index] = state.data.questions[index + 1];
      state.data.questions[index + 1] = temp;
    },
    deleteQuestion: (state, action) => {
      const index = action.payload;
      state.data.questions.splice(index, 1);
    },
    setSurvey: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTitle,
  addQuestion,
  moveUpQuestion,
  moveDownQuestion,
  deleteQuestion,
  setSurvey,
} = surveySlice.actions;

export default surveySlice.reducer;
