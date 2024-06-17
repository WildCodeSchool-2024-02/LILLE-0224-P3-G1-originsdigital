import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import TermsOfUse from "./components/Contact/TermsOfUse";
import Contact from "./components/Contact/Contact";
import Questions from "./components/Contact/Questions";
import  ContactPage from "./components/Contact/ContactPage";
import Faq from "./components/Contact/Faq";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Terms-Of-Use",
        element: <TermsOfUse/>,
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
        element: <Faq/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
