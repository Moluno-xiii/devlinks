"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserLinksPage from "./UserLinksPage";
import Header from "./Header";
const queryClient = new QueryClient({
  defaultOptions : {
    queries : {
      staleTime : 0
    }
  }
});

type Props = {};

const UserComponent = (props: Props) => {
  const params = useParams();
  const userID = params.userID as string;  
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Header />
        <UserLinksPage userId = {userID} />
      </QueryClientProvider>
    </div>
  );
};

export default UserComponent;


