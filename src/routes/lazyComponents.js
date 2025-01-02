import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const BookDetails = React.lazy(() => import("../pages/BookDetails"));
const NotFound = React.lazy(() => import("../pages/PageNotFound"));
const About = React.lazy(() => import("../pages/About"));
const ErrorBoundary = React.lazy(() => import("../components/ErrorBoundary"));
export { Home, BookDetails, NotFound, About, ErrorBoundary };
