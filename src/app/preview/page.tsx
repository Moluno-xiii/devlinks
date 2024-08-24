"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Preview from "./Preview";

type Props = {};

const queryClient = new QueryClient();

const page = (props: Props) => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Preview />
      </QueryClientProvider>
    </div>
  );
};

export default page;
