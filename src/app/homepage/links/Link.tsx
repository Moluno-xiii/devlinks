import {
  Button,
  Input,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { HiAtSymbol } from "react-icons/hi";
import { sortedLinks } from "./UploadLinkForm";
import { LuLink } from "react-icons/lu";
import { TbMenu } from "react-icons/tb";
import EditLinkModal from "./EditLinkModal";

type Props = {
  link: any;
  index: number;
};

const Link = ({ link, index }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <li className="flex flex-col justify-center gap-y-3 bg-lightGrey p-5">
      <div className="flex flex-row items-center justify-between">
        <span className="space-x-2 font-bold text-grey">
          <TbMenu className="inline-block" /> Link #{index + 1}
        </span>
        <Button size="sm" className="w-10" variant="ghost" color="danger">
          Delete
        </Button>
      </div>
      <div className="flex flex-col gap-y-3">
        <label htmlFor="platform" className="text-sm">
          Platform
        </label>
        <Select
          startContent={<HiAtSymbol />}
          defaultSelectedKeys={[link.platform]}
          isDisabled
        >
          {sortedLinks.map((sortedLink) => (
            <SelectItem key={sortedLink.key} startContent={sortedLink.icon}>
              {sortedLink.key}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex flex-col gap-y-3">
        <label htmlFor="link" className="text-sm">
          Link
        </label>
        <Input
          startContent={<LuLink />}
          type="url"
          value={link.link}
          disabled
          placeholder="e.g. https://www.github.com/my-profile"
        />
      </div>
      <Button size="sm" onPress={onOpen} className="w-10" variant="ghost" color="primary">
        Edit
      </Button>
        <EditLinkModal
          platform ={link.platform}
          link ={link.link}
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
        />
    </li>
  );
};

export default Link;
