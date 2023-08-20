import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@/store';
import '@/index.css';
import { CruiseTable } from './cruisestable';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <CruiseTable />
    </Provider>
  </React.StrictMode>,
);
