import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import ErrorElement from './Component/ErrorElement/ErrorElement';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import AuthProvider from './Provider/AuthProvider';
import AddTouristsSport from './Component/AddTouristsSport/AddTouristsSport';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/Register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/AddTouristsSpot",
        element: <AddTouristsSport></AddTouristsSport>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
