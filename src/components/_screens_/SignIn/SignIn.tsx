import React from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  Stack,
  Text,
  VStack,
} from 'native-base';
import { Controller, FormProvider, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';

import { useFormWithSchema } from 'src/hooks/useFormWithSchemaBuilder';
import FormFieldInput from 'src/components/_shared_/FormFields/Input';
import LogoImage from 'src/components/_shared_/FormAssets/LogoImage';
import FormFieldInputPassword from 'src/components/_shared_/FormFields/InputPassword';
import FormFieldCheckbox from 'src/components/_shared_/FormFields/CheckBox';

export type SignInScreenCompFormValues = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required('cannot be blank').email('email must be valid'),
  password: yup.string().required('cannot be blank'),
});

type SignInScreenCompProps = {
  isLoading?: boolean;
  onSignUpClick: () => void;
  onSubmit: (data: SignInScreenCompFormValues) => void;
};

const SignInScreenComp: React.FC<SignInScreenCompProps> = ({
  isLoading,
  onSubmit,
  onSignUpClick,
}) => {
  const { control, ...methods } = useFormWithSchema(schema, { mode: 'onBlur' });

  const handleSubmit: SubmitHandler<SignInScreenCompFormValues> = (data) => {
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
          <LogoImage />

          <Text fontSize="2xl" textAlign="center">
            Welcome!
          </Text>

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
              name="password"
              render={({ field }) => (
                <FormFieldInputPassword
                  placeholder="Password"
                  onChangeText={field.onChange}
                  errorMessage={methods.formState.errors.password?.message}
                />
              )}
            />
          </Stack>

          <Stack width="full">
            <Button onPress={methods.handleSubmit(handleSubmit)}>
              {isLoading ? 'Loading...' : 'Sign In'}
            </Button>

            <Button variant="link" onPress={onSignUpClick}>
              Register Yourself
            </Button>
          </Stack>
        </VStack>
      </FormControl>
    </FormProvider>
  );
};

export default SignInScreenComp;
