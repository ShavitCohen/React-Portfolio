// Use your own firebase account config
const firebaseConfig = {
  apiKey: 'AIzaSyBfLRXB-hpP4apKs9cFPL_WuqYohXDdv_4',
  authDomain: 'pwa-workshop-63f48.firebaseapp.com',
  databaseURL: 'https://pwa-workshop-63f48.firebaseio.com',
  projectId: 'pwa-workshop-63f48',
  storageBucket: 'pwa-workshop-63f48.appspot.com',
  messagingSenderId: '1000934113831',
  appId: '1:1000934113831:web:581cee95d9a6f469',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

//Use this VAPID (taken from google firebase) to register tokens
messaging.usePublicVapidKey(
  'BJSG4JTD20QA-AEf7BehZkj_jcI9XlhCzXXNmSvi6nX6u3FjST1szGsAt0pIk33LiDOPkBBdaAI-Kvn_mNQamUU'
);

const _requestNotificationsPermission = () => {
  return messaging
    .requestPermission()
    .then(() => {
      console.log('Notification permission granted.');
      return true;
    })
    .catch(function(err) {
      console.log('Unable to get permission to notify.', err);
    });
};

const _getTokenFromMessagingService = () => {
  return messaging
    .getToken()
    .then(currentToken => {
      if (currentToken) {
        return currentToken;
      } else {
        console.log(
          'No Instance ID token available. Request permission to generate one.'
        );
        return null;
      }
    })
    .catch(function(err) {
      console.log('An error occurred while retrieving token. ', err);
    });
};

const _sendTokenToMyServer = token => {
  if (token) {
    const addToken = firebase.functions().httpsCallable('addToken');
    return addToken({token});
  }
  return Promise.reject('Problem sending token to backend');
};

// Will be triggered if a push is recieved but the tab is on focus
messaging.onMessage(function(payload) {
  console.log('Message received but app on Focus', payload);
  console.log(payload);
});

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('sw.js')
      .then(registration => messaging.useServiceWorker(registration))
      .then(() => _requestNotificationsPermission())
      .then(() => _getTokenFromMessagingService()) //Step 1 start here
      .then(token => _sendTokenToMyServer(token))
      .then(res => {
        console.log('Notifications setup is ready');
      })
      .catch(err => {
        console.log('Notifications Error', err);
      });
  }
};

registerServiceWorker();
