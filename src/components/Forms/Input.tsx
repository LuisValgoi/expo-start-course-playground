import {
  FormControl,
  IInputProps,
  Input,
  WarningOutlineIcon,
} from 'native-base';
import React from 'react';

type FormInputProps = {
  errorMessage?: string;
} & IInputProps;

const FormInput: React.FC<FormInputProps> = ({
  errorMessage = null,
  isInvalid,
  placeholder,
  ...rest
}) => {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid}>
      <Input
        placeholder={`Enter ${placeholder}...`}
        _focus={{
          bgColor: 'gray.100',
          borderWidth: 1,
          borderColor: 'gray.400',
        }}
        _invalid={{
          bgColor: 'red.100',
          borderWidth: 2,
          borderColor: 'red.500',
        }}
        {...rest}
      />
      {errorMessage && (
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errorMessage}
        </FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};

export default FormInput;
