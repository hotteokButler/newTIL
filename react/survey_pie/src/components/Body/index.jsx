import TextInput from '../SelectInput';
import TextAreaInput from '../TextAreaInput';
import SelectInput from '../TextInput';

export default function Body({ type }) {
  let InputComponent = null;

  if (type === 'select') {
    InputComponent = SelectInput;
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
    InputComponent = TextAreaInput;
  }
  return (
    <>
      <InputComponent />
    </>
  );
}
