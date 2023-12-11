import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../Pages/Dashboard";
import SignUp from "../Pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
