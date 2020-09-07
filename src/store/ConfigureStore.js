import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native';
import { RootReducer } from './reducers/TodosReducer'

const clearAllData = () => {
    AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys))
        .then(() => alert('success'));
}

export const ConfigureStore = () => {

    const config = {
        key: 'root',
        storage: AsyncStorage
    };

    const persistedReducer = persistReducer(config, RootReducer)

    const store = createStore(persistedReducer, applyMiddleware(thunk, logger));

    const persistor = persistStore(store);

    return { persistor, store };
}

// clearAllData()