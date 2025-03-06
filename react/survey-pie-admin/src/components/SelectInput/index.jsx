import { Radio } from 'antd';

function SelectInput({ options }) {
  return (
    <div>
      {options &&
        options.items.map((item, idx) => (
          <Radio
            key={idx}
            value={item}
            style={{ pointerEvents: 'none', display: 'block' }}
          >
            {item}
          </Radio>
        ))}
    </div>
  );
}

export default SelectInput;
