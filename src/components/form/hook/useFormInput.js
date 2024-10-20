import { useState } from "react";

const useFormInput = (type, name, isRequired, validationMessage, initialValue, setValue) => {
  const [value, setLocalValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(null);
  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    setValue(newValue);
    setTouched(true);
    validateInput(newValue);
  };

  const validateInput = (inputValue) => {
    if (isRequired && !inputValue) {
      setIsValid(false);
      return;
    }

    switch (type) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(emailRegex.test(inputValue));
        break;
      case "text":
        if (name === "user_name") {
          setIsValid(inputValue.length >= 3);
        } else if (name === "phone_number") {
          const phoneRegex = /^[0-9]*$/;
          setIsValid(phoneRegex.test(inputValue));
        } else {
          setIsValid(true);
        }
        break;
      case "textarea":
        setIsValid(inputValue.length >= 5);
        break;
      default:
        setIsValid(true);
    }
  };

  return {
    value,
    isValid,
    touched,
    handleChange,
  };
};

export default useFormInput;
