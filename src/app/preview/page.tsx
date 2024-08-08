import { Button } from "@nextui-org/react";
import { Avatar } from "antd";
import React from "react";
import {
  FaArrowRight,
  FaFreeCodeCamp,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import ButtonLink from "./ButtonLink";
import { SiCodewars } from "react-icons/si";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <header className="flex flex-row items-center justify-center gap-x-2">
        <Button className="w-40" variant="ghost" color="primary">
          Back to Editor
        </Button>
        <Button className="w-40" color="primary" variant="shadow">
          Share Link
        </Button>
      </header>

      <div className="mb-14 mt-36 flex flex-col gap-y-6">
        <Avatar
          shape="circle"
          size={150}
          className="border-4 border-primary"
          alt="Profile Picture"
          src="/eminem.jpeg"
        />
        <p className="text-3xl font-bold">John Doe</p>
        <span className="text-grey">example@gmail.com</span>
      </div>

      <div className="flex flex-col gap-y-5">
        <ButtonLink bgColor="black" text="Github" leftIcon={<FaGithub />} />
        <ButtonLink bgColor="#EE3939" text="Youtube" leftIcon={<FaYoutube />} />
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
    </div>
  );
};

export default page;
