import { createBrowserRouter } from "react-router-dom";
import { PageClientHome } from "../pages/clients";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageClientHome />,
  },
]);
