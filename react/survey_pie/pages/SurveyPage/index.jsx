import { useState } from 'react';
import { useParams } from 'react-router-dom';

import ProgressIndicator from '../../src/components/ProgressIndicator';
import QuestionBox from '../../src/components/QuestionBox';

export default function SurveyPage() {
  const { surveyId, step } = useParams();

  console.log(surveyId, step);

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

  const stepState = parseInt(step); // progress bar data

  const [answers, setAnswers] = useState([]);

  return (
    <div>
      <ProgressIndicator />
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
    </div>
  );
}
