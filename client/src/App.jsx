import React from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

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
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
