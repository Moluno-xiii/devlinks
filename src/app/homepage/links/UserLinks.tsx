import { RootState } from "@/app/store/store";
import React from "react";
import { useSelector } from "react-redux";
import Link from "./Link";
import { useLinksQuery } from "@/hooks/useLinksQuery";
import Loader from "@/components/UI/Loader";

type Props = {};

const UserLinks = (props: Props) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { data, isLoading, error } = useLinksQuery(user?.$id);
  if (isLoading) return <Loader />;
  if (error) return <p className="text-error">{error.message}</p>
  return (
    <ul className="my-5 flex flex-col gap-y-5">
      {data?.documents.map((link, index) => (
        <Link link={link} key={link.$id} index={index} />
      ))}
    </ul>
  );
};

export default UserLinks;
