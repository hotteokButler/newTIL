import { PlusCircleOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import { useState } from 'react';

import * as S from './addButton.styled';

function AddButton({ addQuestion }) {
  const [visible, setVisible] = useState(true);
  const hide = () => {
    setVisible(false);
  };
  const handleOpenChange = (newOpen) => {
    setVisible(newOpen);
  };
  return (
    <S.AddButtonWrapper type="button">
      <Popover
        placement="right"
        content={
          <S.PopoverButtonWrap>
            <button
              type="button"
              onClick={() => {
                addQuestion('select');
                hide();
              }}
            >
              객관식
            </button>
            <button
              type="button"
              onClick={() => {
                addQuestion('text');
                hide();
              }}
            >
              단답식
            </button>
            <button
              type="button"
              onClick={() => {
                addQuestion('textarea');
                hide();
              }}
            >
              서술식
            </button>
          </S.PopoverButtonWrap>
        }
        trigger="click"
        open={visible}
        onOpenChange={handleOpenChange}
      >
        <PlusCircleOutlined />
      </Popover>
    </S.AddButtonWrapper>
  );
}

export default AddButton;
