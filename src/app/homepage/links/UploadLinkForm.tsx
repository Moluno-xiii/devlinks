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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

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
  const queryClient = useQueryClient();
  const {isPending, mutate} = useMutation({
    mutationFn : uploadLink,
    onSuccess : () => {
      queryClient.invalidateQueries({
        queryKey : ["fetchLinks"]
      })
      toast.success("Link added successfully")
    },
    onError : (err) => toast.error(err.message)
  })
  
  const onSubmit = (data: CreateLink) => {
    mutate(data, {
      onSuccess : onCloseAddLink
    })
  };

  return <LinkForm onSubmit={onSubmit} loading={isPending} />;
};

export default UploadLinkForm;
