import AddButton from '../AddButton';
import Body from '../Body';
import Card from '../Card';

const PreviewSection = ({ questions, addQuestion }) => {
  if (!questions) return 'loading....😎';

  return (
    <div>
      {questions.map((card, idx) => (
        <Card key={idx} title={card.title} description={card.desc}>
          <Body type={card.type} options={card.options} />
        </Card>
      ))}

      <AddButton onClick={addQuestion} />
    </div>
  );
};

export default PreviewSection;
