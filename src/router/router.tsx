import { createBrowserRouter } from "react-router-dom";
import { routeNames } from "./routes-names";
import NotFoundPage from "@/layouts/components/NotFound";
import HubLayout from "@/layouts/hub.layout";
import HomePage from "@/modules/hub/pages/home/home";

const router = createBrowserRouter([
  // {
  //   path: routeNames.initPage,
  //   element: <AuthLayout />,
  //   children: [

  //     {
  //       path: routeNames.initPage,
  //       element: <LoginPage />,
  //     },
  //     {
  //       path: routeNames.loginPage,
  //       element: <LoginPage />,
  //     },
  //     {
  //       path: routeNames.registerPage,
  //       element: <RegisterPage />,
  //     },
  //   ],
  // },
  //HUB OWNER
  {
    path: routeNames.initPage,
    element:  <HubLayout />,
    children: [
      {
        path: routeNames.initPage,
        element: <HomePage />,
      },
      {
        path: routeNames.homePage,
        element: <HomePage />,
      }
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
])

export default router