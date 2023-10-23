import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Help from "./Pages/Help";
import Listing from "./Pages/Listing";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/listing",
    element: <Listing />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
