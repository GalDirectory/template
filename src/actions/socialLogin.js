/* import {AccessToken, LoginManager} from 'react-native-fbsdk';
 */ import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const signInPhone = async (phone) => {
  return auth().signInWithPhoneNumber(phone);
};

/* export const getFacebookData = async () => {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);
  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();
  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  );

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}; */

export const getGoogleData = async () => {
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { data } = await GoogleSignin.signIn();
  console.log(data);
  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(data.idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
};
