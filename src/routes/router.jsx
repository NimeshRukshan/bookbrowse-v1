import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
  Home,
  BookDetails,
  NotFound,
  About,
  ErrorBoundary,
} from "./lazyComponents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "book/:id",
        element: <BookDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*", // Catch-all route for unmatched paths
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
