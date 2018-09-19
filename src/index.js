import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './store';
import { SplashImage } from './component/image';

import Screen from './screens';

if ((process.env.NODE_ENV || '').toLowerCase() === 'production') {
  // disable console. log in production
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};
  console.debug = () => {};
}

const onBeforeLift = () => {
  console.log('rehydrated!');
};

/* eslint-disable experimentalDecorators */

const App = () =>
  <Provider store={store}>
    <PersistGate
      loading={<SplashImage source={require('./assets/splash.png')} />}
      persistor={persistor}
      onBeforeLift={onBeforeLift}
    >
      {/* <SplashImage source={require('./assets/splash.png')} /> */}
      <Screen onNavigationStateChange={null} />
    </PersistGate>

    {/* <Screen onNavigationStateChange={null} /> */}
  </Provider>;

AppRegistry.registerComponent('reactreduxdemo', () => App);
