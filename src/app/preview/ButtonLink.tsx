import { Button } from "@nextui-org/react";
import React from "react";
import {
  FaArrowRight,
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
import { TbWorldWww } from "react-icons/tb";
import { SiCodewars, SiFrontendmentor, SiHashnode, SiLeetcode, SiWakatime } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

type Props = {
  text: string;
  link?: string;
};
let bgColour;
let textColour = "white";
let icon: React.ReactNode = "";
const ButtonLink = ({ text, link }: Props) => {
  switch (text) {
    case "github":
      bgColour = "#1a1a1a";
      icon = <FaGithub />;
      textColour = "white";
      break;
    case "frontend mentor":
      bgColour = "#FFFFFF";
      textColour = "black";
      icon = <SiFrontendmentor />;
      break;
    case "x (fka twitter)":
      bgColour = "#43B7E9";
      textColour = "white";
      icon = <FaXTwitter />;
      break;
    case "linkedin":
      bgColour = "#2D68FF";
      textColour = "white";
      icon = <FaLinkedin />;
      break;
    case "youtube":
      bgColour = "#EE3939";
      icon = <FaYoutube />;
      textColour = "white";
      break;
    case "facebook":
      bgColour = "#2442AC";
      textColour = "white";
      icon = <FaFacebook />;
      break;
    case "twitch":
      bgColour = "#EE3FC8";
      icon = <FaTwitch />;
      textColour = "white";
      break;
    case "instagram":
      bgColour = "#DD2A7B";
      textColour = "white";
      icon = <FaInstagram />;
      break;
    case "dev.to":
      bgColour = "#333333";
      icon = <FaDev />;
      textColour = "white";
      break;
    case "codewars":
      bgColour = "#8A1A50";
      icon = <SiCodewars />;
      textColour = "white";
      break;
    case "freecodecamp":
      bgColour = "#302267";
      icon = <FaFreeCodeCamp />;
      textColour = "white";
      break;
    case "gitlab":
      bgColour = "#EB4925";
      icon = <FaGitlab />;
      textColour = "white";
      break;
    case "hashnode":
      bgColour = "#0330D1";
      icon = <SiHashnode />;
      textColour = "white";
      break;
    case "stack overflow":
      bgColour = "#EC7100";
      icon = <FaStackOverflow />;
      textColour = "white";
      break;
    case "whatsapp":
      bgColour = "green";
      icon = <FaWhatsapp />;
      textColour = "white";
      break;
    case "leetcode":
      bgColour = "#FB8500";
      icon = <SiLeetcode />;
      textColour = "white";
      break;
    case "wakatime":
      bgColour = "#E76F51";
      icon = <SiWakatime />;
      textColour = "white";
      break;
    default:
      bgColour = "#633CFF";
      textColour = "black";
      icon = <TbWorldWww />;
      break;
  }
  return (
    <Button
      className={`relative flex w-60 flex-row justify-start capitalize text-${textColour}`}
      style={{ backgroundColor: bgColour }}
      size="lg"
      startContent={icon}
      endContent={<FaArrowRight className="absolute right-5" />}
      onClick={() => window.open(link, "_blank")}
    >
      {text}
    </Button>
  );
};

export default ButtonLink;
