import { Input } from 'antd';
const { TextArea } = Input;

function TextAreaInput({ options }) {
  return (
    <TextArea
      autoSize={{ minRows: 3 }}
      placeholder={options.placeholder || ''}
    />
  );
}

export default TextAreaInput;
