import ReactDOM from "react-dom/client";
import axios from "axios";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CreationAccount from "./components/creationAccount/CreationAccount";
import UpdateUserInfo from "./components/Compte/UpdateUserInfo";
import TermsOfUse from "./components/Contact/TermsOfUse";
import Contact from "./components/Contact/Contact";
import Questions from "./components/Contact/Questions";
import ContactPage from "./components/Contact/ContactPage";
import Faq from "./components/Contact/Faq";
import Count from "./components/Compte/Compte";
import Header from "./components/Header/header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
        <Header />
      </>
    ),
    children: [
      {
        path: "/Terms-Of-Use",
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
        path: "/contactPage",
        element: <ContactPage />,
      },
      {
        path: "/foire-aux-questions",
        element: <Faq />,
      },
      {
        path: "/play",
        element: <Header />,
      },
    ],
  },
  {
    path: "/users/:id",
    element: <UpdateUserInfo />,
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
        id: window.location.href.split("/")[4],
      };

      if (
        username.length > 3 &&
        regex.test(email) &&
        regexPass.test(password)
      ) {
        axios.put("http://localhost:3310/api/users", formulaire);
      }
      return formulaire;
    },
  },
  {
    path: "/subscribe",
    element: <CreationAccount />,
    action: async ({ request }) => {
      const data = await request.formData();
      const last = data.get("last");
      const first = data.get("first");
      const mail = data.get("mail");
      const user = data.get("user");
      const pass = data.get("pass");
      const result = {
        lastname: last,
        firstname: first,
        email: mail,
        username: user,
        password: pass,
      };
      return result;
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
