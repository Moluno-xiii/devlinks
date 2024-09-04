"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LinksComponent from "./LinksComponent";

type Props = {};
const queryClient = new QueryClient({
  defaultOptions : {
    queries : {
      staleTime : 0
    }
  }
});

const page = (props: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
        <LinksComponent />
    </QueryClientProvider>
  );
};

export default page;
