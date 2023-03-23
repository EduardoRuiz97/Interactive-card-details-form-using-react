import { useState } from "react";


const useInput = (validationFn) => {
  const [inputValue, setInputValue] = useState('');
  const [isInputOnBlur, setIsInputOnBlur] = useState(false);


  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  }

  const inputBlurHandler = () => {
    setIsInputOnBlur(true);
  }

  const resetInput = () => {
    setInputValue('');
    setIsInputOnBlur(false);
  }

  const isInputValid = validationFn(inputValue);
  const isInputInvalid = !isInputValid && isInputOnBlur;

  return (
    {
      inputValue,
      isInputValue: isInputInvalid,
      inputChangeHandler,
      inputBlurHandler,
      resetInput,
    }
  )


}

export default useInput;