import { RootState } from "@/app/store/store";
import { CreateLink, LinkItem } from "@/types";
import { uploadLink } from "@/utils/links_utils/link_functions";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  FaDev,
  FaFacebook,
  FaFreeCodeCamp,
  FaGithub,
  FaGitlab,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { HiAtSymbol, HiMenuAlt4 } from "react-icons/hi";
import { LuLink } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { SiCodewars, SiFrontendmentor, SiHashnode } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import { useSelector } from "react-redux";
import UploadLinkForm from "./UploadLinkForm";

type Props = {
  onCloseAddLink: () => void;
};

const Link = ({ onCloseAddLink }: Props) => {
  return (
    <li className="mx-auto mt-4 flex h-[228px] w-[295px] flex-col gap-y-3 rounded-xl bg-lightGrey p-5 md:h-[400px] md:w-[640px]">
      <div className="flex flex-row items-center justify-between">
        <span className="flex items-center gap-x-2 font-bold text-grey">
          Link #1
          <HiMenuAlt4 />
        </span>
        <Button
          size="sm"
          startContent={<MdDeleteOutline className="md:h-5 md:w-5" />}
          variant="ghost"
          color="danger"
        >
          Delete
        </Button>
      </div>
      <UploadLinkForm onCloseAddLink={onCloseAddLink} />
    </li>
  );
};

export default Link;

