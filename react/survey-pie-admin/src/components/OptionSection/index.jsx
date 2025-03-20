import { BulbOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setQusetion } from '../../stores/survey/surveySlice';
import * as S from './optionSection.styled';

const { Item } = Form;

const OptionSection = () => {
  const selectedQusetionId = useSelector(
    (state) => state.selectedQusetionId.data,
  );
  const question = useSelector((state) =>
    selectedQusetionId === null
      ? null
      : state.survey.data.questions[selectedQusetionId],
  );

  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onFieldFinish = (values) => {
    dispatch(
      setQusetion({
        index: selectedQusetionId,
        data: values,
      }),
    );
  };
  const onFieldFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    question &&
      form.setFieldsValue(
        {
          title: question.title,
          desc: question.desc,
        },
        [form, question],
      );
  });
  return (
    <S.OptionSectionWrapper>
      <S.OptionTitle>문항 옵션</S.OptionTitle>
      <S.OptionCon>
        <S.FormWrapper>
          {question ? (
            <Form
              form={form}
              name="option-form"
              onFinish={onFieldFinish}
              onFinishFailed={onFieldFinishFailed}
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
                <S.SubmitButton>
                  <Item>
                    <button type="submit">적용</button>
                  </Item>
                </S.SubmitButton>
              </S.ItemWrapper>
            </Form>
          ) : (
            <S.NoQuestion>질문을 선택해주세요.😭</S.NoQuestion>
          )}
        </S.FormWrapper>
      </S.OptionCon>
    </S.OptionSectionWrapper>
  );
};

export default OptionSection;
