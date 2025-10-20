import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Combine reducers (useful for future additions like 'travelBucketReducer')
const rootReducer = combineReducers({
  user: userReducer,
  // you can add other reducers here in the future
});

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  // If you had data you DIDN'T want to persist (e.g., loading state), 
  // you'd add it to the 'blacklist' array here.
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Disabling serializable check is necessary when using Redux Persist
      serializableCheck: false,
    }),
});

// Export the persistor to be used in the main application entry point (main.jsx)
export const persistor = persistStore(store);
