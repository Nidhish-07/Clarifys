import React from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  Navigate,
  Route,
} from "react-router-dom";
import AskQuestion from "./components/AskQuestion";
import Question from "./components/Question/index.jsx";
import Auth from "./auth";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser, logout } from "./store/userSlice";
import { auth } from "../firebase";
import { getAuth } from "firebase/auth";

const PrivateOutlet = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
  // const auth=getAuth()
  // let auth = { token: false };
  // return auth.token ? <Outlet /> : <Navigate to="/auth" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateOutlet />,
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

  React.useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
