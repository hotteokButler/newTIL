import { CloseOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import * as S from './card.styled';

function Card({
  title,
  description,
  children,
  onUpButtonClick,
  onDownButtonClick,
  onDeleteButtonClick,
}) {
  return (
    <S.CardWrapper>
      <S.Head>
        <S.Title>{title}</S.Title>
        {description && <S.Desc>{description}</S.Desc>}
      </S.Head>
      <S.Body>{children}</S.Body>

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
