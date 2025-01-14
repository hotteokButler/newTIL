import ProgressIndicator from './components/ProgressIndicator';
import QuestoinBox from './components/QuestionBox';

function App() {
  const questions = [
    {
      title: '질문1 입니다',
      dsect: '설명1 입니다',
      type: 'select',
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

  return (
    <div id="survey_pie_app">
      <ProgressIndicator />
      <QuestoinBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
      />
    </div>
  );
}

export default App;
