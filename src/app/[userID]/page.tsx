"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Preview from "../preview/Preview";
const queryClient = new QueryClient();

type Props = {};

const UserComponent = (props: Props) => {
  const params = useParams();
  const userID = params.userID as string;  
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Preview userId = {userID} />
      </QueryClientProvider>
    </div>
  );
};

export default UserComponent;


