export default function useFormField(initialVal = '') {
  const [val, setVal] = React.useState(initialVal);
  const [isValid, setValid] = React.useState(true);

  function onChange(e) {
    setVal(e.target.value);

    if (!e.target.value) {
      setValid(false);
    } else if (!isValid) setValid(true);
  }

  function setValidManually(bool = false) {
    setValid(bool);
  }

  return [val, onChange, isValid, setValidManually];
}

/*
  Author: Dinesh Pandiyan
  GitHub: https://github.com/flexdinesh
  Twitter: https://twitter.com/flexdinesh
*/
