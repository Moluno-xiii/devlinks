import { Button, Input, Select, SelectItem } from "@nextui-org/react";
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
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { HiAtSymbol, HiMenuAlt4 } from "react-icons/hi";
import { LuLink } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { SiCodewars, SiFrontendmentor, SiHashnode } from "react-icons/si";

type Props = {};
interface LinkItem {
  key: string;
  icon: React.ReactNode;
}

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
    key: "Twitter",
    icon: <FaTwitter />,
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
];

const Link = (props: Props) => {
  return (
    <li className="mx-auto mt-4 flex h-[228px] w-[295px] flex-col gap-y-3 rounded-xl bg-lightGrey p-5 md:h-[228px] md:w-[640px]">
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

      <div className="flex flex-col justify-center gap-y-3">
        <div className="flex flex-col gap-y-3">
          <label htmlFor="link" className="text-sm">
            Platform
          </label>
          <Select startContent={<HiAtSymbol />} >
            {_links.map((link) => (
              <SelectItem key={link.key} startContent={link.icon}>
                {link.key}
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
            isRequired
            type="link"
            defaultValue=""
            placeholder="e.g. https://www/github.com/my-profile"
          />
        </div>
      </div>
    </li>
  );
};

export default Link;
