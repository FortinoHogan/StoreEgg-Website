import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { coinsSlice } from './Slices/coinsSlices';
import { productSlice } from './Slices/productSlices';

const rootReducer = combineReducers({
    product: productSlice.reducer,
    coins: coinsSlice.reducer
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig ,rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch