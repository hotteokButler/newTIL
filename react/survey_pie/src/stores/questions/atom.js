import { atom } from 'recoil';

const questionsState = atom({
  key: 'questionsState',
  default: [
    {
      title: '질문1 입니다',
      desc: '설명1 입니다',
      type: 'text',
      required: false,
      options: {
        placeholder: '10자 이내로 답해주세요.',
      },
    },
    {
      title: '질문2 입니다',
      desc: '설명2 입니다',
      type: 'select',
      required: false,
      options: {
        items: ['답변1', '답변2', '답변3', '답변4', '답변5'],
      },
    },
    {
      title: '질문3 입니다',
      desc: '설명3 입니다',
      type: 'textarea',
      required: false,
      options: {
        placeholder: '400자 이내로 답해주세요.',
      },
    },
  ],
});

export default questionsState;
