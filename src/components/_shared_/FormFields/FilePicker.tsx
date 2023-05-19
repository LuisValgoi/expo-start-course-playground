import { FormControl, IInputProps, WarningOutlineIcon } from 'native-base';
import React from 'react';
import FilePicker from '../FilePicker';
import { ImagePickerAsset } from 'expo-image-picker';
import { StorageReference, ref } from 'firebase/storage';
import { storage } from 'src/services/firebase';
import { UseFormSetError, UseFormSetValue } from 'react-hook-form';

export type FormFieldFilePickerProps = {
  controllerName: string;
  setValue: UseFormSetValue<any>;
  setError: UseFormSetError<any>;
  errorMessage?: string;
  onPickImage: (storageRef: StorageReference, imgBlob: Blob) => void;
} & IInputProps;

const FormFieldFilePicker: React.FC<FormFieldFilePickerProps> = ({
  controllerName,
  setValue,
  setError,
  errorMessage = null,
  isInvalid,
  onPickImage,
  ...rest
}) => {
  const invalid = !!errorMessage || isInvalid;

  const handlePickImage = async (img: ImagePickerAsset) => {
    const response = await fetch(img.uri);
    const blob = await response.blob();
    const storageRef = ref(storage, `images/${img.fileName}`);
    onPickImage(storageRef, blob);
    setValue(controllerName, ref.name);
    setError(controllerName, {});
  };

  return (
    <FormControl isInvalid={invalid}>
      <FilePicker
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
        onPickImage={handlePickImage}
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

export default FormFieldFilePicker;
