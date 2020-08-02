import { useState } from 'react';

function useForm(initialData) {
  const [value, setValue] = useState(initialData);

  const clearForm = (initialData) => {
    setValue(initialData);
  };

  const addValue = (key, newValue) => {
    setValue({
      ...value,
      [key]: newValue,
    });
  };

  const handleOnChange = (event) => {
    addValue(event.target.getAttribute('name'), event.target.value);
  };

  return {
    handleOnChange,
    value,
    clearForm,
  };
}
export default useForm;
