import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "./ErrorBoundary.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageOne from "./PageOne.tsx";
import PageTwo from "./PageTwo.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/one",
    element: <PageOne />,
  },
  {
    path: "/one/two",
    element: <ErrorBoundary><PageTwo /></ErrorBoundary>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
