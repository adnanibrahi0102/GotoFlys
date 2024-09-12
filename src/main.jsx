import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./Layout.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Offers from "./pages/Offers.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import Blog from "./pages/Blog.jsx";
import TurbulencePage from './pages/TurbulencePage.jsx'
import GoogleTag from "./components/GoogleTag.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "About",
        element: <AboutUs />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "blogs",
        element: <Blog />,
      },
      {
        path: "termsConditions",
        element: <TermsConditions />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path:"turbulence",
        element:<TurbulencePage/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleTag />  {/* Google Tag Manager */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
