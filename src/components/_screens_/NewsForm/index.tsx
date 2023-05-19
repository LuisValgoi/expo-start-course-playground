import React, { useState } from 'react';
import { Button, FormControl, Stack, Text, VStack } from 'native-base';
import { Controller, FormProvider, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';

import { useFormWithSchema } from 'src/hooks/useFormWithSchemaBuilder';
import FormFieldInput from 'src/components/_shared_/FormFields/Input';
import { INews } from 'src/interfaces/interfaces';
import FormFieldFilePicker from 'src/components/_shared_/FormFields/FilePicker';
import { StorageReference } from 'firebase/storage';

export type NewsFormScreenCompFormValues = {
  title: string;
  description: string;
  image: { ref: StorageReference; data: Blob };
};

type NewsFormScreenCompFormValuesInternal = {
  title: string;
  description: string;
  image: string;
};

const schema = yup.object().shape({
  title: yup.string().required('cannot be blank'),
  description: yup.string().required('cannot be blank'),
  image: yup.string().required('cannot be blank'),
});

type NewsFormScreenCompProps = {
  loading?: boolean;
  newsDetail?: INews;
  onSubmit: (data: NewsFormScreenCompFormValues) => void;
};

const NewsFormScreenComp: React.FC<NewsFormScreenCompProps> = ({
  loading,
  onSubmit,
  newsDetail,
}) => {
  const [img, setImg] = useState<{ ref: StorageReference; data: Blob }>();

  const { control, ...methods } = useFormWithSchema(schema, {
    mode: 'onBlur',
    defaultValues: {
      title: newsDetail?.title,
      description: newsDetail?.description,
    },
  });

  const handleSubmit: SubmitHandler<NewsFormScreenCompFormValuesInternal> = ({
    title,
    description,
  }) => {
    onSubmit({
      title,
      description,
      image: { ref: img?.ref, data: img?.data },
    } as NewsFormScreenCompFormValues);
  };

  const handleOnPickImage = (ref: StorageReference, data: Blob) => {
    setImg({ ref, data });
  };

  return (
    <FormProvider control={control} {...methods}>
      <FormControl>
        <VStack
          alignItems="center"
          p="6"
          pt="2"
          bgColor="white"
          space="4"
          borderRadius="md"
        >
          <Text fontSize="2xl" textAlign="center">
            {newsDetail ? `Editing ${newsDetail.title}` : 'Create News'}
          </Text>

          <Stack width="full">
            <Controller
              control={control}
              name="title"
              render={({ field, formState }) => (
                <FormFieldInput
                  placeholder="Title"
                  defaultValue={formState.defaultValues?.title}
                  onChangeText={field.onChange}
                  errorMessage={methods.formState.errors.title?.message}
                />
              )}
            />
          </Stack>

          <Stack width="full">
            <Controller
              control={control}
              name="description"
              render={({ field, formState }) => (
                <FormFieldInput
                  placeholder="Description"
                  defaultValue={formState.defaultValues?.description}
                  onChangeText={field.onChange}
                  errorMessage={methods.formState.errors.description?.message}
                />
              )}
            />
          </Stack>

          <Stack width="full">
            <Controller
              control={control}
              name="image"
              render={({ formState }) => (
                <FormFieldFilePicker
                  controllerName="image"
                  placeholder="Select Image"
                  defaultValue={formState.defaultValues?.image}
                  onPickImage={handleOnPickImage}
                  errorMessage={methods.formState.errors.image?.message}
                  setValue={methods.setValue}
                  setError={methods.setError}
                />
              )}
            />
          </Stack>

          <Stack width="full">
            <Button onPress={methods.handleSubmit(handleSubmit)}>
              {loading ? 'Loading...' : 'Send'}
            </Button>
          </Stack>
        </VStack>
      </FormControl>
    </FormProvider>
  );
};

export default NewsFormScreenComp;
