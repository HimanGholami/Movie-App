import { createBrowserRouter, Outlet } from "react-router";
import Rootlayout from "./Components/layouts/RootLayout";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
