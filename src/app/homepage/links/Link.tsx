import { Button } from "@nextui-org/react";
import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
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

