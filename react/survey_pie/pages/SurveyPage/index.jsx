import { useState } from 'react';
import { useParams } from 'react-router-dom';

import ProgressIndicator from '../../src/components/ProgressIndicator';
import QuestionBox from '../../src/components/QuestionBox';
import * as CS from '../pageCommon.styled';

export default function SurveyPage() {
  const { surveyId, step } = useParams();

  const questions = [
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
  ];

  const stepState = parseInt(step); // progress bar data

  const [answers, setAnswers] = useState([]);

  return (
    <>
      <ProgressIndicator />
      <CS.PageWarpper>
        <QuestionBox
          question={questions[stepState]}
          questionsLength={questions.length}
          step={stepState}
          answer={answers[stepState]}
          setAnswer={(newAnswer) => {
            setAnswers((prevAnswers) => {
              const newAnswers = [...prevAnswers];
              newAnswers[stepState] = newAnswer;
              return newAnswers;
            });
          }}
        />
      </CS.PageWarpper>
    </>
  );
}
