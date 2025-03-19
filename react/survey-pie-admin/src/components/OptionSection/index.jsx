import { BulbOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { useSelector } from 'react-redux';

import * as S from './optionSection.styled';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const { Item } = Form;

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
        {/* {question ? <></> : <S.NoQuestion>질문을 선택해주세요.😭</S.NoQuestion>} */}
        <S.FormWrapper>
          <Form
            name="option-form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <S.FormSubTitle>
              <BulbOutlined />
              &nbsp; 공통 옵션
            </S.FormSubTitle>
            <S.ItemWrapper>
              <Item
                label="질문"
                name="title"
                layout="vertical"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Item>
            </S.ItemWrapper>
            <S.ItemWrapper>
              <Item
                label="설명"
                name="desc"
                layout="vertical"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Item>
            </S.ItemWrapper>
          </Form>
        </S.FormWrapper>
      </S.OptionCon>
    </S.OptionSectionWrapper>
  );
};

export default OptionSection;
