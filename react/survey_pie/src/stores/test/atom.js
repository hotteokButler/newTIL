import { atom } from 'recoil';

const testState = atom({
  key: 'textState',
  default: ['a', 'b', 'c', 'd'],
});

export default testState;
