import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Pages/HomePage/Home';
import Login from './Pages/LoginPage/Login';
import Register from './Pages/RegisterPage/Register';
import AuthProvider from './Components/Auth/AuthProvider';
import ManageUsers from './Pages/AdminPages/ManageUsers/ManageUsers';

import SystemMonitor from './Pages/AdminPages/SystemMontor/SystemMonitor';
import BalanceInquiry from './Pages/UserPages/BalanceInquiryPage/BalanceInquiry';
import SendMoney from './Pages/UserPages/SendMoneyPage/SendMoney';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },

      // admin routes
      {
        path: "/user-management",
        element: <ManageUsers></ManageUsers>
      },

      {
        path: "/system-monitoring",
        element: <SystemMonitor></SystemMonitor>
      },

      // User Routes
      {
        path: '/balance-inquiry',
        element: <BalanceInquiry></BalanceInquiry>
      },
      {
        path: '/cash-in',
        element: <BalanceInquiry></BalanceInquiry>
      },
      {
        path: '/cash-out',
        element: <BalanceInquiry></BalanceInquiry>
      },
      {
        path: '/history',
        element: <BalanceInquiry></BalanceInquiry>
      },
      {
        path: '/send-money',
        element: <SendMoney></SendMoney>

      },
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
