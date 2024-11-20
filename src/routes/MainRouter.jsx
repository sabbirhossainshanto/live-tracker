import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

const MainRouter = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <App />,
        children: [],
      },
    ],
    {
      basename: import.meta.env.BASE_URL ?? "/",
    }
  );

  return <RouterProvider router={router} />;
};

export default MainRouter;
