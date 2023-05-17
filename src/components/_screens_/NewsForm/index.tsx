import React, { useEffect } from 'react';
import { Button, FormControl, Stack, Text, VStack } from 'native-base';
import { Controller, FormProvider, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';

import { useFormWithSchema } from 'src/hooks/useFormWithSchemaBuilder';
import FormFieldInput from 'src/components/_shared_/FormFields/Input';
import { INews } from 'src/interfaces/interfaces';

export type NewsFormScreenCompFormValues = {
  title: string;
  description: string;
  urlToImage: string;
};

const schema = yup.object().shape({
  title: yup.string().required('cannot be blank'),
  description: yup.string().required('cannot be blank'),
  urlToImage: yup.string().required('cannot be blank'),
});

type NewsFormScreenCompProps = {
  newsDetail?: INews;
  onSubmit: (data: NewsFormScreenCompFormValues) => void;
};

const NewsFormScreenComp: React.FC<NewsFormScreenCompProps> = ({
  onSubmit,
  newsDetail,
}) => {

  const defaultValues = {
    title: newsDetail?.title,
    description: newsDetail?.description,
    urlToImage: newsDetail?.urlToImage,
  };

  const { control, ...methods } = useFormWithSchema(schema, {
    mode: 'onBlur',
    defaultValues,
  });

  const handleSubmit: SubmitHandler<NewsFormScreenCompFormValues> = (data) => {
    onSubmit(data);
  }

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
              name="urlToImage"
              render={({ field, formState }) => (
                <FormFieldInput
                  placeholder="URL"
                  defaultValue={formState.defaultValues?.urlToImage}
                  onChangeText={field.onChange}
                  errorMessage={methods.formState.errors.urlToImage?.message}
                />
              )}
            />
          </Stack>

          <Stack width="full">
            <Button onPress={methods.handleSubmit(handleSubmit)}>Send</Button>
          </Stack>
        </VStack>
      </FormControl>
    </FormProvider>
  );
};

export default NewsFormScreenComp;
