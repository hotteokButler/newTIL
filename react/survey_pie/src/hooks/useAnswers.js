import { useRecoilState } from 'recoil';

import answersState from '../stores/answers/atom';

export default function useAnswers() {
  return useRecoilState(answersState);
}
