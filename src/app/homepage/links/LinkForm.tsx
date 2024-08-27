import { RootState } from "@/app/store/store";
import Loader from "@/components/UI/Loader";
import { CreateLink, EditLink, LinkItem } from "@/types";
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
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiAtSymbol } from "react-icons/hi";
import { LuLink } from "react-icons/lu";
import { SiCodewars, SiFrontendmentor, SiHashnode, SiLeetcode } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import { useSelector } from "react-redux";

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
  {
    key : "Leetcode",
    icon : <SiLeetcode />
  }
];

type Props = {
  onSubmit: (data: CreateLink) => void;
  defaultLinkValue?: string;
  defaultPlatformValue?: any;
  onClose?: () => void;
};
export const sortedLinks = _links.sort((a, b) => a.key.localeCompare(b.key));
const LinkForm = ({
  onSubmit,
  defaultLinkValue,
  defaultPlatformValue,
  onClose,
}: Props) => {
  const { user, loading } = useSelector((state: RootState) => state.auth);
  const { loading: loadingLinks, errorMessage } = useSelector(
    (state: RootState) => state.link,
  );

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateLink>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center gap-y-3"
    >
      <div className="flex flex-col gap-y-3">
        <label htmlFor="platform" className="text-sm">
          Platform
        </label>
        <Controller
          name="platform"
          control={control}
          rules={{ required: "Platform is required" }}
          render={({ field }) => (
            <Select
              {...field}
              startContent={<HiAtSymbol />}
              isInvalid={!!errors.platform}
              errorMessage={errors.platform?.message}
              defaultSelectedKeys={[defaultPlatformValue]}
            >
              {sortedLinks.map((link) => (
                <SelectItem key={link.key} startContent={link.icon}>
                  {link.key}
                </SelectItem>
              ))}
            </Select>
          )}
        />
      </div>
      <div className="flex flex-col gap-y-3">
        <label htmlFor="link" className="text-sm">
          Link
        </label>
        <Controller
          name="link"
          control={control}
          rules={{
            required: "Link is required",
            pattern: {
              value: /^https?:\/\/.+/,
              message: "Please enter a valid URL",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              defaultValue={defaultLinkValue}
              startContent={<LuLink />}
              type="url"
              placeholder="e.g. https://www.github.com/my-profile"
              isInvalid={!!errors.link}
              errorMessage={errors.link?.message}
            />
          )}
        />
      </div>
      <input type="hidden" {...register("userId")} value={user.$id} />
      <input type="hidden" {...register("userName")} value={user.name} />
      <Button
        type="submit"
        onPress={onClose}
        isLoading={loadingLinks}
        color="primary"
        variant="solid"
      >
        Submit
      </Button>
    </form>
  );
};

export default LinkForm;
