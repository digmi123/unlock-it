import React from "react";
import { Input } from "../ui/input";
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/solid";
import useFormInput from "./hook/useFormInput";
import { BASED_CLASSES } from "./consts";

const FormInput = ({
  type = "text",
  name,
  placeholder,
  isRequired = false,
  errorMessage = "Invalid input",
  inputClassName = "",
  rows,
  initialValue,
  setValue,
  ...props
}) => {
  const { value, isValid, touched, handleChange } = useFormInput(
    type,
    name,
    isRequired,
    errorMessage,
    initialValue,
    setValue
  );

  return (
    <div className="flex flex-col relative">
      {isRequired && (
        <label htmlFor={name} className="text-red-500 font-semibold">
          *
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={() => setTouched(true)}
          rows={rows}
          className={`${BASED_CLASSES} ${inputClassName}`}
          {...props}
        />
      ) : (
        <Input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={() => setTouched(true)}
          className={`${BASED_CLASSES} ${inputClassName}`}
          {...props}
        />
      )}

      {touched && (
        <div className="absolute right-3 top-8">
          {isValid ? (
            <CheckCircleIcon className="text-green-500 w-6 h-6" />
          ) : (
            <ExclamationCircleIcon className="text-red-500 w-6 h-6" />
          )}
        </div>
      )}

      {touched && isValid === false && (
        <span className="text-red-500 text-base mt-1 font-bold">{errorMessage}</span>
      )}
    </div>
  );
};

export default FormInput;
