import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Profile  from './pages/Profile.tsx';
import Login from './pages/Login.tsx';

const router = createBrowserRouter([
  {
    path: '/validation-login-react/',
    element: <App />,
    children: [
      {
        path: '/validation-login-react/',
        element: <Login />,
      },
      {
        path: '/validation-login-react/profile',
        element: <Profile />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
