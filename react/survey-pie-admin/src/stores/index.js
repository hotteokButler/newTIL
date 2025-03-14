import { configureStore } from '@reduxjs/toolkit';

import surveySlice from './survey/surveySlice';

// /src/stores/ 내부에 각각의 reducer들을 만들어서 여기서 통합해서 사용함
export default configureStore({
  reducer: {
    survey: surveySlice,
  },
  // middleware : {}
});

const middlewareFn = (store) => {
  //다음 로직으로 넘어가지 않고 처리되는 로직
  return (next) => {
    //다음으로 넘기는 함수
    return (action) => {
      //action 넘어오는 함수, 세개의 값을 다 쓰기 위해서는 여기서 로직 추가
    };
  };
};

//축약

const middlewareFn = (store) => (next) => (action) => {};
