import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

if ('serviceWorker' in navigator) {
    //const messaging = getMessaging();
    navigator.serviceWorker
      .register('/sw.js')
    //   .then(registration => {
    //     !isEmpty(messaging) && messaging.useServiceWorker(registration);
    //   })
    //   .catch(console.error);
  }
  