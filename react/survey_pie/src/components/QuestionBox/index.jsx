import useCurrentAnswer from '../../hooks/useCurrentAnswer';
import useCurrentQuestion from '../../hooks/useCurrentQuestion';
import ActionButtons from '../ActionButtons';
import Body from '../Body';
import Desc from '../Desc';
import Title from '../Title';

export default function QuestionBox() {
  const [answer, setAnswer] = useCurrentAnswer();
  const question = useCurrentQuestion();

  if (question) {
    return (
      <div>
        <Title>{question.title}</Title>
        <Desc>{question.desc}</Desc>
        <Body
          type={question.type}
          answer={answer}
          setAnswer={setAnswer}
          options={question.options}
        />
        <ActionButtons />
      </div>
    );
  }
}
