import { useParams } from 'react-router-dom';

export default function useStep() {
  const params = useParams();
  const step = parseInt(params.step);

  return step;
}
