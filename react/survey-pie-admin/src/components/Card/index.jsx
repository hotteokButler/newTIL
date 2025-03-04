import * as S from './card.styled';

function Card({ title, description, children }) {
  return (
    <S.CardWrapper>
      <S.Head>
        <S.Title>{title}</S.Title>
        {description && <S.Desc>{description}</S.Desc>}
      </S.Head>
      <S.Body>{children}</S.Body>
    </S.CardWrapper>
  );
}

export default Card;
