import { REACT_APP_GOOGLE_WEB_CLIENT_ID } from '@env';
import {
  ConfigureParams,
  GoogleSignin,
} from '@react-native-google-signin/google-signin';

const firebaseConfig: ConfigureParams = {
  webClientId: REACT_APP_GOOGLE_WEB_CLIENT_ID,
  offlineAccess: true,
};

GoogleSignin.configure(firebaseConfig);
