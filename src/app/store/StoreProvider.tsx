"use client";
import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface props {
  children: React.ReactNode;
}

export const ClientProvider = ({ children }: props) => {
  return (
    <Suspense>
      <Provider store={store}>{children}</Provider>;
    </Suspense>
  );
};

