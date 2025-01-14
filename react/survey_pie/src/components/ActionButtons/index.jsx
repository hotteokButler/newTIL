import { useNavigate } from 'react-router-dom';

export default function ActionButtons({ questionsLength, step }) {
  const navigate = useNavigate();
  const isLast = questionsLength - 1 === step;

  return (
    <div>
      {step === 0 || (
        <button
          onClick={() => {
            navigate(`${--step}`);
          }}
        >
          이전
        </button>
      )}
      {isLast ? (
        <button
          onClick={() => {
            navigate('/done');
          }}
        >
          제출
        </button>
      ) : (
        <button
          onClick={() => {
            navigate(`${++step}`);
          }}
        >
          다음
        </button>
      )}
    </div>
  );
}
