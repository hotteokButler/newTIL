import { createSlice } from '@reduxjs/toolkit';

// store에는 loading 중인건지 error처리를 위한 값을 같이 설정해 둠
const initialState = { data: null, loading: false, error: null };

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
    setQusetion: (state, action) => {
      const { index, data } = action.payload;
      state.data.questions[index] = data;
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
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTitle,
  addQuestion,
  setQusetion,
  moveUpQuestion,
  moveDownQuestion,
  deleteQuestion,
  setSurvey,
  setLoading,
  setError,
} = surveySlice.actions;

export default surveySlice.reducer;
