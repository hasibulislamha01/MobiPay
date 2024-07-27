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
import AuthProvider from './Components/SharedComponents/Navbar/Auth/AuthProvider';
import ManageUsers from './Pages/AdminPages/ManageUsers/ManageUsers';
import SendMoney from './Pages/UsersPages/SendMoney';
import CashIn from './Pages/UsersPages/CashInPage/CashIn';

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

      // User routes
      {
        path: "/send-money",
        element: <SendMoney></SendMoney>
      },
      {
        path: "/cash-in",
        element: <CashIn></CashIn>
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
