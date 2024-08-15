import { Button } from "@nextui-org/react";
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

type Props = {
    text : string,
    bgColor: string,
    leftIcon : React.ReactNode
}

const ButtonLink = ({text, leftIcon, bgColor}: Props) => {
  return (
    <Button
    className="relative text-white flex w-60 flex-row justify-start"
    style={{backgroundColor : bgColor}}
    size="lg"
    startContent={leftIcon}
    endContent={<FaArrowRight className="absolute right-5" />}
  >
   {text}

  </Button>
  )
}

export default ButtonLink