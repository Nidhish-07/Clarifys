import React from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import AskQuestion from "./components/AskQuestion";
import Question from "./components/Question/index.jsx";
import Auth from "./auth";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./store/userSlice";
import { auth } from "../firebase";

const Page = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/ask-question",
        element: <AskQuestion />,
      },
      {
        path: "/question",
        element: <Question />,
      },
      { path: "/auth", element: <Auth /> },
    ],
  },
]);

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  React.useEffect(()=>{
// auth.onAuthStateChanged()
  },[])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
