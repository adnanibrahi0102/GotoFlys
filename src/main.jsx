import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Layout from './Layout.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Offers from './pages/Offers.jsx'
import ContactUs from './pages/ContactUs.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"About",
        element:<AboutUs/>
      },
      {
        path:"offers",
        element:<Offers/>
      },
      {
        path:"blogs",
        element:<h1>Latest Blog Posts</h1>
      },
      {
        path:"termsConditions",
        element:<h1>Terms & Conditions</h1>
      },
      {
        path:"contact",
        element:<ContactUs/>
      }
    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
