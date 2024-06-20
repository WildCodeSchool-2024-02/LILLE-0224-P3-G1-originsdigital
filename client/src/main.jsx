import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import TermsOfUse from "./components/Contact/TermsOfUse";
import Contact from "./components/Contact/Contact";
import Questions from "./components/Contact/Questions";
import ContactPage from "./components/Contact/ContactPage";
import Faq from "./components/Contact/Faq";
import Count from "./components/Compte/Compte";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/terms-of-use",
    element: <TermsOfUse />,
  },
  {
    path: "/informations",
    element: <Contact />,
  },
  {
    path: "/article",
    element: <Questions />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/foire-aux-questions",
    element: <Faq />,
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
        return formulaire;
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
