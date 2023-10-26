import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import router from "./Router/Router";
import Context from "./Context/Context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <Layout></Layout>
        </RouterProvider>
      </QueryClientProvider>
    </Context>
  </React.StrictMode>
);
