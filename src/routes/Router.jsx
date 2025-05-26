import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Application from '../pages/Application';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router";


function Layout() {
    return(
    <>
    {/* <Nav/> */}
    <Outlet/>
    {/* <Footer/> */}
    </>
  )  
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
        // {path:"/", element:<Home/>},
        {path:"/", element:<Application/>},

    ]
  },
]);

export default function Router() {
  return (
      <RouterProvider router={router} />
  )
}
