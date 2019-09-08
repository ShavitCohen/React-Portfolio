importScripts('https://www.gstatic.com/firebasejs/6.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.0.1/firebase-messaging.js');

workbox.setConfig({debug: true}); //eslint-disable-line

/**
 * Precache handling
 */
const initCaching = () => {
  //precache from precache manifest
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []); //eslint-disable-line
  const {CacheFirst} = workbox.strategies;
  //images
  workbox.routing.registerRoute(
    /(.*)\.(?:png|gif|jpg|svg|ico|jpeg)/,
    new CacheFirst({cacheName: 'images'})
  );

  //fonts
  workbox.routing.registerRoute(
    /(.*)\.(?:ttf|woff)/,
    new CacheFirst({cacheName: 'fonts'})
  );
};

/**
 * Messaging handling
 */
const initMessaging = () => {
  firebase.initializeApp({messagingSenderId: '1000934113831'});
  const messaging = firebase.messaging();
  messaging.setBackgroundMessageHandler(payload => {
    console.log('[notifications.js] Received background message ', payload);

    const notificationTitle = payload.data.title;
    const notificationOptions = {
      body: payload.data.body,
      icon: '/images/pwa/mstile-150x150.png',
      data: {url: payload.data.url},
    };

    return self.registration.showNotification(
      notificationTitle,
      notificationOptions
    );
  });
};

/**
 * Handling notification click
 */
const initNotificationClickHndler = () => {
  //Open the app when clicking the notification
  self.addEventListener('notificationclick', event => {
    console.log('Notification have been clicked', event);
    event.notification.close(); // Explicit close.
    const url = event.notification.data.url;
    event.waitUntil(
      clients.matchAll({type: 'window'}).then(windowClients => {
        // Check if there is already a window/tab open with the target URL
        for (let i = 0; i < windowClients.length; i++) {
          const client = windowClients[i];
          // If so, just focus it.
          if (url.indexOf(client.url) > -1 && 'focus' in client) {
            client.focus();
            self.location.href = url;
            return null;
          }
        }
        // If not, then open the target URL in a new window/tab.
        if (clients.openWindow) {
          return clients.openWindow(url);
        }
      })
    );
  });
};

initCaching();
initMessaging();
initNotificationClickHndler();

//clients API - https://developer.mozilla.org/en-US/docs/Web/API/Clients
