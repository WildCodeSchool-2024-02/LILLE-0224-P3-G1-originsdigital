import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Count from "./components/Compte/Compte";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/compte",
    element: <Count />,
    action: async ({ request }) => {
      const form = await request.formData();
      const username = form.get("username");
      const email = form.get("email");
      const password = form.get("password");
      const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
      const formulaire = {
        user: username,
        mail: email,
        pass: password,
      };

      if (
        username.length > 3 &&
        regex.test(email) &&
        regexPass.test(password)
      ) {
        alert("modification enregistré !");
      }

      return formulaire;
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
