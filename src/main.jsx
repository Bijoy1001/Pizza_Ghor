import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ShowDetail from './components/ShowDetail/ShowDetail';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import SignUp from './components/Login/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:'/',
        element:<Home></Home> 
      },
      {
        path:'/order',
        element:<Order></Order>,
        loader: () => fetch('/cardDetail.json')
      },
      {
        path:'/login',
        element:<Login></Login>
        
      },
      {
        path:'/singup',
        element:<SignUp></SignUp>
      },
      {
        path:'/ShowDetail/:id',
        element:<ShowDetail></ShowDetail>,
        loader: () => fetch('/cardDetail.json')
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
