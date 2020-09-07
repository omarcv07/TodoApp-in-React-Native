import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import { ConfigureStore } from './src/store/ConfigureStore'

import AppNavigator from './src/navigations/app-navigator';

const { persistor, store } = ConfigureStore();

export default function App() {
    return(
        <Provider store={store}>
            <PersistGate
            persistor={persistor}
            >
                <AppNavigator />
            </PersistGate>
        </Provider>
    );
}
