"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface props {
    children: React.ReactNode;
}

export const ClientProvider = ({ children }: props) => {
    return <Provider store={store}>{children}</Provider>;
};