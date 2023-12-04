import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import router from './Router/route';
import { RouterProvider } from 'react-router-dom';
import { ContextProvider } from './Contexts/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <ContextProvider>
     <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);


