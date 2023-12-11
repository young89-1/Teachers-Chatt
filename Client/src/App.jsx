import './App.css';
import SideBar from './components/SideBar';

import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SideBar from "./components/SideBar";
import Error from "./Error";
import Register from "./Register";
import Profile from "./components/Profile";

const Layout = () => {
  return (
    <div className="md:w-8/12 mx-auto">
      <SideBar />
      <Outlet></Outlet>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        path: "/", // the main home page that'll display the feed
        element: <Home />,
      },
      {
        path: "/profile", // display the profile based on the user's specific ID
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
