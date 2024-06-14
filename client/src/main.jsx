import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Compte from "./components/Compte/Compte";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/compte",
    element: <Compte />,
    // action: (req,_,_)=>{
    //   console.info(req.body)
    // }
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
