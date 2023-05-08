import React, { useState } from 'react';
import { Box, Button, FormControl, Stack, Text, VStack } from 'native-base';
import { Controller, FormProvider, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';

import { useFormWithSchema } from 'src/hooks/useFormWithSchemaBuilder';
import FormInput from 'src/components/Forms/Input';

type FormValues = {
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

const Contact: React.FC = () => {
  const { control, ...methods } = useFormWithSchema(schema, { mode: 'onBlur' });
  const [data, setData] = useState<FormValues | undefined>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setData(data);
  };
  return (
    <FormProvider control={control} {...methods}>
      <FormControl>
        <Box bg="gray.100" p="6" mt="1/4" height="full">
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
                  <FormInput
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
                  <FormInput
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
                  <FormInput
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
                  <FormInput
                    placeholder="Message"
                    onChangeText={field.onChange}
                    errorMessage={methods.formState.errors.message?.message}
                  />
                )}
              />
            </Stack>

            <Stack width="full">
              <Button onPress={methods.handleSubmit(onSubmit)}>Send</Button>
            </Stack>
          </VStack>
          {data && <Text>{JSON.stringify(data)}</Text>}
        </Box>
      </FormControl>
    </FormProvider>
  );
};

export default Contact;
