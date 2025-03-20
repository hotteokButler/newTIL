import * as S from './switchToggle.styled';

function SwitchToggle({ isChecked, handleToggleSwitch }) {
  return (
    <S.SwitchWrapper $isChecked={isChecked} onClick={handleToggleSwitch}>
      <S.SwitchBall $isChecked={isChecked} />
    </S.SwitchWrapper>
  );
}

export default SwitchToggle;
