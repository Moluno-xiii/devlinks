import { RootState } from '@/app/store/store';
import { CreateLink, LinkItem } from '@/types';
import { uploadLink } from '@/utils/links_utils/link_functions';
import { Input, Select, SelectItem } from '@nextui-org/react';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
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
import { FaXTwitter } from 'react-icons/fa6';
import { SiCodewars, SiFrontendmentor, SiHashnode } from 'react-icons/si';
import { TbWorldWww } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import Form from './Form';

const _links: LinkItem[] = [
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
  ];
  

type Props = {
    onCloseAddLink : () => void
}
export  const sortedLinks = _links.sort((a, b) => a.key.localeCompare(b.key))
const UploadLinkForm = ({onCloseAddLink}: Props) => {
    const { user, loading, errorMessage } = useSelector(
        (state: RootState) => state.auth,
      );
      
      const {
        control,
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<CreateLink>();
    
      const onSubmit = (data: CreateLink) => {
        uploadLink(data, onCloseAddLink);
        console.log(data);
        console.log("form submitted");
      };

 
  return (
    <Form onSubmit={onSubmit} />
  )
}

export default UploadLinkForm