import React, { useEffect, useState } from 'react'
import Home from './pages/Home.jsx';
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import client from "./utils/supabaseClient.js"

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const App = () => {

  const [user,setUser] = useState(null);
  useEffect(()=>{
    const fetchUser = async ()=>{
      const {data:{user}} = await client.auth.getUser();
      setUser(user);
    }
    fetchUser();
  },user);
  
  const ProtectedRoute = ({children})=>{
    if(!user){
      return <Navigate to="/login"/>
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Home/></ProtectedRoute>,
      
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App