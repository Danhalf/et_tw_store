import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store.tsx';
import { Provider } from 'react-redux';

const root = document.getElementById('root') as HTMLElement

createRoot(root).render(
    <Provider store={store}>
      <App />
    </Provider>
);
