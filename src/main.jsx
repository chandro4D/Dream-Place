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
import AllTouristsSpot from './Component/AllTouristsSpot/AllTouristsSpot';
import MyList from './Component/MyList/MyList';
import Update from './Component/Update/Update';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Details from './Component/Details/Details';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://assignment-ten-server-ecru-ten.vercel.app/sportSection'),

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
        element: <PrivateRoute><AddTouristsSport></AddTouristsSport></PrivateRoute>
      },
      {
        path: "/AllTouristsSpot",
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch('https://assignment-ten-server-ecru-ten.vercel.app/addTouristsSport')

      },
      
      {
        path: "/myList",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
        loader: () => fetch('https://assignment-ten-server-ecru-ten.vercel.app/addTouristsSport')

      },
      {
        path: 'update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`https://assignment-ten-server-ecru-ten.vercel.app/addTouristsSport/${params.id}`)
      },
      {
        path: "/details",
        element: <Details></Details>
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
