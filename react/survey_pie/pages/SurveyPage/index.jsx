import { useState } from 'react';

import ProgressIndicator from '../../src/components/ProgressIndicator';
import QuestionBox from '../../src/components/QuestionBox';

export default function SurveyPage() {
  const questions = [
    {
      title: '질문1 입니다',
      dsect: '설명1 입니다',
      type: 'text',
      required: false,
      optinos: {},
    },
    {
      title: '질문2 입니다',
      dsect: '설명2 입니다',
      type: 'text',
      required: false,
      optinos: {},
    },
  ];

  const step = 1; // progress bar data

  const [answers, setAnswers] = useState([]);

  return (
    <div>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answer={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
      />
    </div>
  );
}
