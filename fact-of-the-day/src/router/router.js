import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;

