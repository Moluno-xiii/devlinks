import { RootState } from "@/app/store/store";
import { CreateLink, LinkItem } from "@/types";
import { uploadLink } from "@/utils/links_utils/link_functions";
import React from "react";
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
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCodewars, SiFrontendmentor, SiHashnode, SiLeetcode, SiWakatime } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import LinkForm from "./LinkForm";
import { InvalidateQueryFilters, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export const _links: LinkItem[] = [
  {
    key: "Github",
    icon: <FaGithub />,
  },
  {
    key: "Frontend Mentor",
    icon: <SiFrontendmentor />,
  },
  {
    key: "X (FKA Twitter)",
    icon: <FaXTwitter />,
  },
  {
    key: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    key: "Youtube",
    icon: <FaYoutube />,
  },
  {
    key: "Facebook",
    icon: <FaFacebook />,
  },
  {
    key: "Twitch",
    icon: <FaTwitch />,
  },
  {
    key: "Instagram",
    icon: <FaInstagram />,
  },
  {
    key: "Dev.to",
    icon: <FaDev />,
  },
  {
    key: "Codewars",
    icon: <SiCodewars />,
  },
  {
    key: "Freecodecamp",
    icon: <FaFreeCodeCamp />,
  },
  {
    key: "GitLab",
    icon: <FaGitlab />,
  },
  {
    key: "Hashnode",
    icon: <SiHashnode />,
  },
  {
    key: "Stack Overflow",
    icon: <FaStackOverflow />,
  },
  {
    key: "Whatsapp",
    icon: <FaWhatsapp />,
  },
  {
    key: "Personal Website",
    icon: <TbWorldWww />,
  },
  {
    key : "Leetcode",
    icon : <SiLeetcode />
  },
  {
    key: "WakaTime",
    icon: <SiWakatime />,
  },
];

type Props = {
  onCloseAddLink: () => void;
};

export const sortedLinks = _links.sort((a, b) => a.key.localeCompare(b.key));

const UploadLinkForm = ({ onCloseAddLink }: Props) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const queryClient = useQueryClient();
  const onSubmit = (data: CreateLink) => {
    uploadLink(data, onCloseAddLink)
      .then(() => {
        queryClient.invalidateQueries([
          "fetchLinks",
          user.$id,
        ] as InvalidateQueryFilters);
      })
      .catch((error: any) => {
        toast.error(error.message);
        console.error("Error updating link:", error);
      });
    console.log(data);
    console.log("form submitted");
  };

  return <LinkForm onSubmit={onSubmit} />;
};

export default UploadLinkForm;
