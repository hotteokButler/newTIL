import { BulbOutlined } from '@ant-design/icons';
import { Form, Input, InputNumber } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { QUESTION_LABEL_TYPE, QUESTION_TYPE } from '../../constants/question';
import { setQusetion } from '../../stores/survey/surveySlice';
import SwitchToggle from '../SwitchToggle/SwitchToggle';
import * as S from './optionSection.styled';

const { Item } = Form;

// 공통 옵션
const fieldGroups = [
  {
    title: '공통 옵션',
    fields: [
      {
        label: '질문',
        name: 'title',
        rules: [{ required: true }],
        type: QUESTION_LABEL_TYPE.TEXT,
      },
      {
        label: '설명',
        name: 'desc',
        rules: [{ required: true }],
        type: QUESTION_LABEL_TYPE.TEXT,
      },
      {
        label: '필수 여부',
        name: 'desc',
        rules: [],
        type: QUESTION_LABEL_TYPE.SWITCH,
      },
    ],
  },
];

// 세부 옵션
const detailFieldsMap = {
  text: [
    {
      label: 'Placeholder',
      name: 'placeholder',
      rules: [{ required: false }],
      type: QUESTION_LABEL_TYPE.TEXT,
    },
    {
      label: '최대 입력 길이',
      name: 'max',
      rules: [{ required: false }],
      type: QUESTION_LABEL_TYPE.NUMBER,
    },
  ],
  textarea: [
    {
      label: 'Placeholder',
      name: 'placeholder',
      rules: [{ required: false }],
      type: QUESTION_LABEL_TYPE.TEXT,
    },
    {
      label: '최대 입력 길이',
      name: 'max',
      rules: [{ required: false }],
      type: QUESTION_LABEL_TYPE.NUMBER,
    },
  ],
  select: [
    {
      label: '답변(,로 구분해서 작성해주세요)',
      name: 'items',
      rules: [{ required: true }],
      type: QUESTION_LABEL_TYPE.TEXT,
    },
    {
      label: '최대 선택 갯수',
      name: 'max',
      rules: [{ required: false }],
      type: QUESTION_LABEL_TYPE.NUMBER,
    },
  ],
};

// 공통옵션 type별 input render
const setInputByFieldType = (type, requiredState, handleRequiredStateFn) => {
  if (type === QUESTION_LABEL_TYPE.TEXT) {
    return <Input />;
  } else if (type === QUESTION_LABEL_TYPE.SWITCH) {
    return (
      <SwitchToggle
        isChecked={requiredState}
        handleToggleSwitch={handleRequiredStateFn}
      />
    );
  } else if (type === QUESTION_LABEL_TYPE.NUMBER) {
    return <InputNumber />;
  } else {
    return null;
  }
};

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
  const [toggleState, setToggleState] = useState(
    question ? question.required : false,
  );

  const onFieldFinish = (values) => {
    const { title, desc, ...options } = values;

    const newValues = {
      title,
      desc,
      required: toggleState,
      options: options.items
        ? {
            max: options.max,
            items: options.items.split(',').filter((item) => item.length > 0),
          }
        : {
            max: options.max,
            placeholder: options.placeholder,
          },
      type: question.type,
    };

    dispatch(
      setQusetion({
        index: selectedQusetionId,
        data: newValues,
      }),
    );
  };

  const onFieldFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleToggleSwitch = () => {
    setToggleState((prev) => !prev);
  };

  useEffect(() => {
    if (!question) return;

    const type = question.type;

    const detailFieldsValue = {};

    if (type === QUESTION_TYPE.TEXT || type === QUESTION_TYPE.TEXTAREA) {
      detailFieldsValue.max = question.options.max;
      detailFieldsValue.placeholder = question.options.placeholder;
    } else if (type === QUESTION_TYPE.SELECT) {
      detailFieldsValue.max = question.options.max;
      detailFieldsValue.items = question.options.items.join(',');
    }

    form.setFieldsValue({
      title: question.title,
      desc: question.desc,
      required: question.required,
      ...detailFieldsValue,
    });
    setToggleState(question.required);
  }, [form, question]);

  // 공통 옵션 및 세부 옵션 merge

  const mergedGroups = question
    ? [
        ...fieldGroups,
        {
          title: '세부옵션,',
          fields: detailFieldsMap[question.type],
        },
      ]
    : [];

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
              {mergedGroups.map((group, g_idx) => (
                <S.FormCon key={g_idx}>
                  <S.FormSubTitle>
                    <BulbOutlined />
                    &nbsp; {group.title}
                  </S.FormSubTitle>
                  {group.fields.map((field, f_idx) => (
                    <S.ItemWrapper key={f_idx}>
                      <Item layout="vertical" {...field}>
                        {setInputByFieldType(
                          field.type,
                          toggleState,
                          handleToggleSwitch,
                        )}
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
