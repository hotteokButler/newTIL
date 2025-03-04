import Card from '../Card';

const PreviewSection = ({ questions }) => {
  if (!questions) return 'loading....😎';

  return (
    <div>
      {questions.map((card, idx) => (
        <Card key={idx} title={card.title} description={card.desc}>
          Body
        </Card>
      ))}
    </div>
  );
};

export default PreviewSection;
