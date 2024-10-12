"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LinksComponent from "./LinksComponent";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const ClientProvider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LinksComponent />
    </QueryClientProvider>
  );
};

export default ClientProvider;
