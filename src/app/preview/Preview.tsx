"use client";
import { Button } from "@nextui-org/react";
import { Avatar } from "antd";
import React from "react";
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
import { RootState } from "../store/store";

type Props = {};

const Preview = (props: Props) => {
  const { user, loading, errorMessage } = useSelector(
    (state: RootState) => state.auth,
  );
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Header />

      <main className="z-10 mx-auto mt-10 sm:mt-36 flex flex-col items-center overflow-y-auto py-3 sm:h-[560px] sm:w-[350px] sm:rounded-xl sm:bg-white sm:shadow-sm">
        <div className="mb-14 flex items-center flex-col gap-y-6">
          <Avatar
            shape="circle"
            size={150}
            className="border-4 border-primary"
            alt="Profile Picture"
            src="https://cloud.appwrite.io/v1/storage/buckets/66be8cdc001ef1920a3e/files/66c273e50027228045bc/view?project=66b683e5003dbe7d5c53"
            // src="/eminem.jpeg"
          />
          <p className="text-3xl font-bold capitalize">{`${user?.name}'s profile`}</p>
          <span className="text-grey">{user?.email}</span>
        </div>

        <div className="flex flex-col gap-y-5">
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
        </div>
      </main>
      <div className="file absolute left-0 right-0 top-0 hidden h-[357px] rounded-b-[32px] bg-primary sm:block"></div>
    </div>
  );
};

export default Preview;
