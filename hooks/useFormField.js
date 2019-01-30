import { useState } from 'react';

function useFormField(initialVal = '') {
  const [val, setVal] = useState(initialVal);

  function onChange(e) {
    setVal(e.target.value);
  }

  return [val, onChange];
}

export default useFormField;

/*
  Author: Dinesh Pandiyan
  GitHub: https://github.com/flexdinesh
  Twitter: https://twitter.com/flexdinesh
*/
