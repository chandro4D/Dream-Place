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
import Details from './Component/Details/Details';
import MyList from './Component/MyList/MyList';
import Update from './Component/Update/Update';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:7000/sportSection'),

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
      },
      {
        path: "/AllTouristsSpot",
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch('http://localhost:7000/addTouristsSport')

      },
      {
        path: '/details/:_id',
        element: <Details></Details>
      },
      {
        path: "/myList",
        element: <MyList></MyList>,
        loader: () => fetch('http://localhost:7000/addTouristsSport')

      },
      {
        path: 'update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:7000/addTouristsSport/${params.id}`)
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
