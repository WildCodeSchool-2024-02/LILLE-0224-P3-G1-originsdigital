import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ConditionsDutilisation from "./components/Contact/ConditionsDutilisation";
import Contact from "./components/Contact/Contact";
import Questions from "./components/Contact/Questions";
import  ContactPage from "./components/Contact/ContactPage";
import QuestionsTest from "./components/Contact/QuestionsTeste";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/conditions",
        element: <ConditionsDutilisation />,
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
        element: <QuestionsTest/>,
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
