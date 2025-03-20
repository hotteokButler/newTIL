import { BulbOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setQusetion } from '../../stores/survey/surveySlice';
import SwitchToggle from '../SwitchToggle/SwitchToggle';
import * as S from './optionSection.styled';

const { Item } = Form;

const fieldGroups = [
  {
    title: '공통 옵션',
    fields: [
      {
        label: '질문',
        name: 'title',
        rules: [{ required: true }],
        type: 'text',
      },
      {
        label: '설명',
        name: 'desc',
        rules: [{ required: true }],
        type: 'text',
      },
      { label: '필수 여부', name: 'desc', rules: [], type: 'switch' },
    ],
  },
];

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
  const [toggleState, setToggleState] = useState(false);

  const onFieldFinish = (values) => {
    dispatch(
      setQusetion({
        index: selectedQusetionId,
        data: { ...values, required: toggleState },
      }),
    );
  };

  const onFieldFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleToggleSwitch = () => {
    setToggleState((prev) => !prev);
    console.log(toggleState);
  };
  const setInputByFieldType = (type) => {
    if (type === 'text') {
      return <Input />;
    } else if (type === 'switch') {
      return (
        <SwitchToggle
          isChecked={toggleState}
          handleToggleSwitch={handleToggleSwitch}
        />
      );
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (!question) return;
    form.setFieldsValue({
      title: question.title,
      desc: question.desc,
      required: question.required,
    });
    setToggleState(question.required);
  }, [form, question]);
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
              {fieldGroups.map((group, g_idx) => (
                <S.FormCon key={g_idx}>
                  <S.FormSubTitle>
                    <BulbOutlined />
                    &nbsp; {group.title}
                  </S.FormSubTitle>
                  {group.fields.map((field, f_idx) => (
                    <S.ItemWrapper key={f_idx}>
                      <Item layout="vertical" {...field}>
                        {setInputByFieldType(field.type)}
                      </Item>
                    </S.ItemWrapper>
                  ))}
                </S.FormCon>
              ))}
              <S.SubmitButton>
                <Item>
                  <button type="submit">적용</button>
                </Item>
              </S.SubmitButton>
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
