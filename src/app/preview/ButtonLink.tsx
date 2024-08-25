import { Button } from "@nextui-org/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  text: string;
  bgColor: string;
  link? : string
  leftIcon: React.ReactNode;
};

const ButtonLink = ({ text, leftIcon, bgColor, link }: Props) => {
  switch (text) {
    case "freecodecamp":
      
      break;
  
    default:
      break;
  }
  return (
    <Button
      className="relative flex w-60 flex-row justify-start text-white"
      style={{ backgroundColor: bgColor }}
      size="lg"
      startContent={leftIcon}
      endContent={<FaArrowRight className="absolute right-5" />}
    >
      {/* {text} */}
      <a href=""></a>
      <a href={link} className="capitalize" target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </Button>
  );
};

export default ButtonLink;
