import React from 'react';
import { Button, FormControl, Stack, Text, VStack } from 'native-base';
import { Controller, FormProvider, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';

import { useFormWithSchema } from 'src/hooks/useFormWithSchemaBuilder';
import FormFieldInput from 'src/components/_shared_/FormFields/Input';

export type ContactScreenCompFormValues = {
  name: string;
  email: string;
  message: string;
  phone: string;
};

const schema = yup.object().shape({
  name: yup.string().required('cannot be blank'),
  email: yup.string().required('cannot be blank').email('email must be valid'),
  message: yup.string().required('cannot be blank'),
  phone: yup.string().required('cannot be blank'),
});

type ContactScreenCompProps = {
  onSubmit: (data: ContactScreenCompFormValues) => void;
};

const ContactScreenComp: React.FC<ContactScreenCompProps> = ({ onSubmit }) => {
  const { control, ...methods } = useFormWithSchema(schema, { mode: 'onBlur' });

  const handleSubmit: SubmitHandler<ContactScreenCompFormValues> = (data) => {
    onSubmit(data);
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
            Get in Touch!
          </Text>

          <Stack width="full">
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <FormFieldInput
                  placeholder="Name"
                  onChangeText={field.onChange}
                  errorMessage={methods.formState.errors.name?.message}
                />
              )}
            />
          </Stack>

          <Stack width="full">
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <FormFieldInput
                  placeholder="Email"
                  onChangeText={field.onChange}
                  errorMessage={methods.formState.errors.email?.message}
                />
              )}
            />
          </Stack>

          <Stack width="full">
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <FormFieldInput
                  placeholder="Phone Number"
                  onChangeText={field.onChange}
                  errorMessage={methods.formState.errors.phone?.message}
                />
              )}
            />
          </Stack>

          <Stack width="full">
            <Controller
              control={control}
              name="message"
              render={({ field }) => (
                <FormFieldInput
                  placeholder="Message"
                  onChangeText={field.onChange}
                  errorMessage={methods.formState.errors.message?.message}
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

export default ContactScreenComp;
