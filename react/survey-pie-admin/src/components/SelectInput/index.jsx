import { Radio } from 'antd';
import { useEffect, useState } from 'react';

function SelectInput({ options }) {
  const [selectOptions, setSelectOptions] = useState(null);

  useEffect(() => {
    selectOptions ||
      setSelectOptions(() =>
        options.items.map((items) => ({
          value: items,
          label: items,
        })),
      );
  }, [options]);

  return <Radio.Group options={selectOptions} size="middle" />;
}

export default SelectInput;
