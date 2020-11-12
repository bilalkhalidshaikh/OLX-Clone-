import firebase from "firebase";

const initializeFirebase = async () => {
  const firebaseConfig = {
    apiKey: "AIzaSyA3ao8ca3WxhZWjDqEXLho1fGwmUn5e6uA",
    authDomain: "olxwebclone.firebaseapp.com",
    databaseURL: "https://olxwebclone.firebaseio.com",
    projectId: "olxwebclone",
    storageBucket: "olxwebclone.appspot.com",
    messagingSenderId: "447561439432",
    appId: "1:447561439432:web:471c2793ed6f1d8cacedfd",
    measurementId: "G-J342N1QGDZ",
  };
  await firebase.initializeApp(firebaseConfig);
  navigator.serviceWorker
    .register("../public/firebase-messaging-sw.js")
    .then((registration) => {
      firebase.messaging().useServiceWorker(registration);
    });
};
const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log("token is here =>", token);

    return token;
  } catch (error) {
    console.error(error);
  }
};
export { firebase, initializeFirebase, askForPermissioToReceiveNotifications };
