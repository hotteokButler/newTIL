const thunk = (store) => (next) => (action) => {
  //logic을 담은 action을 받아서 실행해주는 함수 -> thunk

  if (typeof action === 'function') {
    /* logic 안에서도 파생되는 action 발생 시킬 수 있음
     -> api data를 받아서 setData action으로 store에 저장할 수 있음
     ❖ dispatch도 같이 넘겨줌
     */
    action(store.dispatch, store.getState);
  } else {
    next(action);
  }
};

export default thunk;
