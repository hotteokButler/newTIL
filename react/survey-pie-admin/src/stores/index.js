import { configureStore } from '@reduxjs/toolkit';

import thunk from './middleware/thunk';
import selectedQuestionReducer from './selectedQuestion/selectedQuestionSlice';
import surveyReducer from './survey/surveySlice';

// /src/stores/ 내부에 각각의 reducer들을 만들어서 여기서 통합해서 사용함
export default configureStore({
  reducer: {
    survey: surveyReducer,
    selectedQusetionId: selectedQuestionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});
