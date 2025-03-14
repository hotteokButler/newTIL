import { configureStore } from '@reduxjs/toolkit';

import thunk from './middleware/thunk';
import surveySlice from './survey/surveySlice';

// /src/stores/ 내부에 각각의 reducer들을 만들어서 여기서 통합해서 사용함
export default configureStore({
  reducer: {
    survey: surveySlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
