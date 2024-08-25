"use client";
import { Button } from "@nextui-org/react";
import { Avatar } from "antd";
import React, { useState } from "react";
import {
  FaFreeCodeCamp,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import ButtonLink from "./ButtonLink";
import { SiCodewars } from "react-icons/si";
import Header from "./Header";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchLinks, getLinks } from "@/utils/links_utils/link_functions";
import { useDispatch } from "react-redux";
import Loader from "@/components/UI/Loader";
import { getAvatar } from "../store/authSlice/authServices";
import { useQuery } from "@tanstack/react-query";

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
    isSuccess,
    data: links,
  } = useQuery({
    queryKey: ["getLinks", userId],
    queryFn: () => getLinks(userId),
  });
  const { user, profilePicture } = useSelector(
    (state: RootState) => state.auth,
  );
  const dispatch = useDispatch<AppDispatch>();
  // const { links, errorMessage, loading } = useSelector(
  //   (state: RootState) => state.link,
  // );

  if (isLoading || isLoadingLinks) return <Loader />;
  // if (loading || isLoading) return <Loader />;
  if (error || linkErrorMessage)
    return <div className="text-error">an error occured</div>;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Header />

      <main className="z-10 mx-auto mt-10 flex flex-col items-center overflow-y-auto py-3 sm:mt-36 sm:h-[560px] sm:w-[350px] sm:rounded-xl sm:bg-white sm:shadow-sm">
        <div className="mb-14 flex flex-col items-center gap-y-6">
          <Avatar
            shape="circle"
            size={150}
            className="border-4 border-primary"
            alt="Profile Picture"
            src={data?.href}
            // src={profilePicture}
          />
          <p className="text-3xl font-bold capitalize">{`${user?.name}'s profile`}</p>
          <span className="text-grey">{user?.email}</span>
        </div>

        {/* <div className="flex flex-col gap-y-5">
          <ButtonLink bgColor="black" text="Github" leftIcon={<FaGithub />} />
          <ButtonLink
            bgColor="#EE3939"
            text="Youtube"
            leftIcon={<FaYoutube />}
          />
          <ButtonLink
            bgColor="#2D68FF"
            text="LinkedIn"
            leftIcon={<FaLinkedin />}
          />
          <ButtonLink
            bgColor="#8A1A50"
            text="Codewars"
            leftIcon={<SiCodewars />}
          />
          <ButtonLink
            bgColor="#302267"
            text="freeCodeCamp"
            leftIcon={<FaFreeCodeCamp />}
          />
          <Button
            onClick={() => dispatch(fetchLinks())}
            variant="ghost"
            color="warning"
          >
            fetch links
          </Button>
        </div> */}
        {links?.documents?.map((link) => (
          <div key={link.$id}>
            <ButtonLink
              text={link?.platform.toLowerCase()}
              leftIcon={<FaFreeCodeCamp />}
              link={link.link}
              bgColor="primary"
            />
          </div>
        ))}
      </main>
      <div className="file absolute left-0 right-0 top-0 hidden h-[357px] rounded-b-[32px] bg-primary sm:block"></div>
    </div>
  );
};

export default Preview;
