import { useSelector } from 'react-redux';

import * as S from './optionSection.styled';

const OptionSection = () => {
  const question = useSelector((state) =>
    state.selectedQusetionId.data === null
      ? null
      : state.survey.data.questions[state.selectedQusetionId.data],
  );
  return (
    <S.OptionSectionWrapper>
      <S.OptionTitle>문항 옵션</S.OptionTitle>
      <S.OptionCon>
        {question ? <></> : <S.NoQuestion>질문을 선택해주세요.😭</S.NoQuestion>}
      </S.OptionCon>
    </S.OptionSectionWrapper>
  );
};

export default OptionSection;
