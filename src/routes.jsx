import { createBrowserRouter, Outlet } from "react-router";
import Rootlayout from "./Components/layouts/RootLayout";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movies/:movieId",
        element: <Movie />,
      },
    ],
  },
]);

export default router;
