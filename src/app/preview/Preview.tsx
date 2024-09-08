"use client";
import { Avatar } from "antd";
import React from "react";
import ButtonLink from "./ButtonLink";
import Header from "./Header";
import { useSelector } from "react-redux";
import { getLinks } from "@/utils/links_utils/link_functions";
import Loader from "@/_components/UI/Loader";
import { getAvatar } from "../store/authSlice/authServices";
import { useQuery } from "@tanstack/react-query";
import { RootState } from "../store/store";

type Props = {
  userId: string;
};
const Preview = ({ userId }: Props) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["profilePic", userId],
    queryFn: () => getAvatar(userId),
  });
  const {
    isLoading: isLoadingLinks,
    error: linkErrorMessage,
    data: links,
  } = useQuery({
    queryKey: ["getLinks", userId],
    queryFn: () => getLinks(userId),
  });
  const { user } = useSelector((state: RootState) => state.auth);

  if (isLoading || isLoadingLinks) return <Loader />;
  // if (error || linkErrorMessage)
    return (
      <div className="text-error">
        {error ? error.message : linkErrorMessage?.message}
      </div>
    )

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Header  />

      <main className="z-10 mx-auto mt-10 flex flex-col items-center overflow-y-auto py-3 sm:mt-36 sm:h-[560px] sm:w-[350px] sm:rounded-xl sm:bg-white sm:shadow-sm">
        <div className="mb-14 flex flex-col items-center gap-y-6">
          <Avatar
            shape="circle"
            size={150}
            className="border-4 border-primary"
            alt="Profile Picture"
            src={data?.href}
          />
          <p className="text-3xl font-bold capitalize">{`${links?.documents[0].userName}'s profile`}</p>
          <span className="text-grey">{links?.documents[links.documents.length -1].userEmail}</span>
        </div>
        <div className="flex flex-col gap-y-5">
          {links?.documents?.map((link) => (
            <ButtonLink
              text={link?.platform.toLowerCase()}
              link={link.link}
              key={link.$id}
            />
          ))}
        </div>
      </main>
      <div className="file absolute left-0 right-0 top-0 hidden h-[357px] rounded-b-[32px] bg-primary sm:block"></div>
    </div>
  )
};

export default Preview
