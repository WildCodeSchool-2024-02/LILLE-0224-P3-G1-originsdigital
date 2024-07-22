import ReactDOM from "react-dom/client";
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
import Header from "./components/Header/header";
import Home from "./pages/Home";
import PlayerPage from "./pages/Player";
import Connexion from "./components/Connexion/Connexion";
import { ContextProvider } from "./components/Context";
import Deconnexion from "./components/Deconnexion";
import VideoCard from "./components/VideoCard/VideoCard";
import PageBrowse from "./pages/PageBrowse";
import InfoContact from "./components/Contact/InfoContact";
import Admin from "./components/Admin";
import Movies from "./pages/Movies";
import Series from "./pages/Series";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Terms-Of-Use",
        element: <TermsOfUse />,
      },
      {
        path: "/info-contact",
        element: <InfoContact />,
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
      {
        path: "/player/:id",
        element: <PlayerPage />,
      },
    ],
  },
  {
    path: "/videocard",
    element: <VideoCard />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/browsepage",
    element: <PageBrowse />,
  },
  {
    path: "/users/:id",
    element: <UpdateUserInfo />,
    action: async ({ request }) => request.formData(),
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
  {
    path: "/connexion",
    element: <Connexion />,
    action: () => null,
  },
  {
    path: "/deconnexion",
    element: <Deconnexion />,
  },
  {
    path: "/administrator",
    element: <Admin />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/series",
    element: <Series />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
