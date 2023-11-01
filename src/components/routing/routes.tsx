import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import FormApp from "../../pages/FormApp";
import Layout from "../../pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/form",
    element: <Layout />,
    children: [{ index: true, element: <FormApp /> }],
  },
]);

export default router;
