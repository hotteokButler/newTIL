import Body from '../Body';
import Card from '../Card';

const PreviewSection = ({ questions }) => {
  if (!questions) return 'loading....😎';

  return (
    <div>
      {questions.map((card, idx) => (
        <Card key={idx} title={card.title} description={card.desc}>
          <Body type={card.type} options={card.options} />
        </Card>
      ))}
    </div>
  );
};

export default PreviewSection;
