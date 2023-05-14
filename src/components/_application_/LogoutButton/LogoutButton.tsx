import React, { useCallback, useRef, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AlertDialog, Button, Icon } from 'native-base';
import { useAuth } from 'src/hooks/useAuth';
import { type ComponentProps } from 'src/interfaces/interfaces';

const LogoutButton = () => {
  const cancelRef = useRef(null);

  const navigation = useNavigation<ComponentProps<'SignIn'>>();

  const [dialogOpen, setDialogOpen] = useState(false);

  const { loggedUser, logoutUser } = useAuth();

  const onOpen = useCallback(() => {
    setDialogOpen(true);
  }, [setDialogOpen]);

  const onClose = useCallback(() => {
    setDialogOpen(false);
  }, [setDialogOpen]);

  const onLogout = useCallback(() => {
    onClose();
    logoutUser();
    navigation.navigate('SignIn', {});
  }, [onClose, logoutUser, navigation]);

  return (
    <>
      <Button onPress={onOpen} p="2">
        <Icon
          as={FontAwesome}
          name="user"
          color="white"
          display="flex"
          alignItems="center"
          textAlign="center"
        />
      </Button>

      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={dialogOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>{`Hey, ${loggedUser?.name}`}</AlertDialog.Header>
          <AlertDialog.Body>
            Are you sure you want to logout from the app?
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={onLogout}>
                Yes, I am!
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </>
  );
};

export default LogoutButton;
