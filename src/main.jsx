import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store.js'; // Ensure the path is correct
import App from './App.jsx';
import './index.css';

// Ensure this matches the ID in index.html
const root = document.getElementById('root'); 

// Only render if the root element exists
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      {/* Redux Provider for state management */}
      <Provider store={store}>
        {/* PersistGate delays rendering until persisted state is retrieved */}
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>,
  );
} else {
  console.error("Failed to find the root element with ID 'root'");
}
