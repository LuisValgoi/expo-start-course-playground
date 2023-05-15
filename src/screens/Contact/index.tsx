import React from 'react';
import { Box } from 'native-base';
import ContactScreenComp, {
  ContactScreenCompFormValues,
} from 'src/components/_screens_/Contact/Contact';
import { Alert } from 'react-native';
import { ScreenProps } from 'src/interfaces/interfaces';

type ContactProps = ScreenProps<'Home'>;

const Contact: React.FC<ContactProps> = ({ navigation }) => {
  const handleSubmit = (data: ContactScreenCompFormValues) => {
    Alert.alert(JSON.stringify(data));
  };

  return (
    <Box bg="gray.100" p="6" mt="1/4" height="full">
      <ContactScreenComp onSubmit={handleSubmit} />
    </Box>
  );
};

export default Contact;
