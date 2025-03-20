import SelectInput from '../SelectInput';
import TextAreaInput from '../TextAreaInput';
import TextInput from '../TextInput';

function Body({ type, options }) {
  let Component = null;

  if (type === 'text') {
    Component = <TextInput options={options} />;
  } else if (type === 'textarea') {
    Component = <TextAreaInput options={options} />;
  } else if (type === 'select') {
    Component = <SelectInput options={options} />;
  } else {
    return null;
  }
  return Component;
}

export default Body;
