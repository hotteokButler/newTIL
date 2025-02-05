import useCurrentQuestion from './useCurrentQuestion';

export default function useRequiredOption() {
  const question = useCurrentQuestion();

  return question?.required || false;
}
