import { Navigate } from "react-router";
import MainLayout from "../layouts/MainLayout";
import SignInLayout from "../layouts/SignInLayout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import GenerateToken from "../pages/GenerateToken";
import ValidateToken from "../pages/ValidateToken";


const routes = ({ isLogged = false }) => [
  {
    path: "/sign-in",
    element: <SignInLayout />,
    children: [
      {
        path: "",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/",
    element: isLogged ? <MainLayout /> : <Navigate to="/sign-in" replace />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "generate-token",
        element: <GenerateToken />,
      },
      {
        path: "validate-token",
        element: <ValidateToken />,
      }
    ],
  },
  {
    path: "*",
    element: <h1 className="text-center py-5">404</h1>,
  },
];
export default routes;
