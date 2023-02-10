import React from "react";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Switch,
  Navigate,
  Outlet,
} from "react-router-dom";
import AskQuestion from "./components/AskQuestion/AskQuestion";
import Question from "./components/Question/index.jsx";
import Auth from "./auth";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser, logout } from "./store/userSlice";
import { auth } from "../firebase";
import { getAuth } from "firebase/auth";

const Page = () => {
  // return (
  //   <div>
  //     <Navbar />

  //     <Outlet />
  //   </div>
  // );
  const user = useAuth();
  return user ? (
    <div>
      <Navbar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/auth" replace />
  );
};
// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       user ? (
//         <Component {...props} />
//       ) : (
//         <Navigate
//           to={{
//             pathname: "/auth",
//             state: {
//               from: props.location,
//             },
//           }}
//         />
//       )
//     }
//   />
// );

const PrivateRoutes = () => {
  let auth = { token: true };
  return auth.token ? (
    <div>
      <Navbar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <PrivateOutlet />,
//     children: [
//       {
//         path: "/",
//         element: <Homepage />,
//       },
//       {
//         path: "/ask-question",
//         element: <AskQuestion />,
//       },
//       {
//         path: "/question",
//         element: <Question />,
//       },
//       { path: "/auth", element: <Auth /> },
//     ],
//   },
// ]);

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
      {/* <RouterProvider router={router} />
       */}
      {/* <Routes>
        <Route exact path="/" element={<Page />}>
          <PrivateRoute exact path="/" element={<Homepage />} />
          <Route exact path="/auth" element={<Auth />} />
          <PrivateRoute exact path="/question" element={<Question />} />
          <PrivateRoute exact path="/ask-question" element={<AskQuestion />} />
        </Route>
      </Routes> */}
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path="/auth" element={<Auth />} />
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/add-question" element={<AskQuestion />} />
            <Route exact path="/question" element={<Question />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
