import { CloseOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import * as S from './card.styled';

function Card({
  title,
  index,
  description,
  children,
  onUpButtonClick,
  onDownButtonClick,
  onDeleteButtonClick,
  onCardClick,
  isSelected,
}) {
  return (
    <S.CardWrapper $isSelected={isSelected}>
      <S.Head onClick={() => onCardClick(index)}>
        <S.Title>{title}</S.Title>
        {description && <S.Desc>{description}</S.Desc>}
      </S.Head>
      <S.Body onClick={() => onCardClick(index)}>{children}</S.Body>

      <S.ButtonGroup>
        <Button type="text" onClick={onUpButtonClick} icon={<UpOutlined />} />
        <Button
          type="text"
          onClick={onDeleteButtonClick}
          icon={<CloseOutlined />}
        />
        <Button
          type="text"
          onClick={onDownButtonClick}
          icon={<DownOutlined />}
        />
      </S.ButtonGroup>
    </S.CardWrapper>
  );
}

export default Card;
