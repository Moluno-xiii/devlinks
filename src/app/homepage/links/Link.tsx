// import { RootState } from "@/app/store/store";
// import { CreateLink, LinkItem } from "@/types";
// import { uploadLink } from "@/utils/links_utils/link_functions";
// import { Button, Input, Select, SelectItem } from "@nextui-org/react";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import React, { useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// import {
//   FaDev,
//   FaFacebook,
//   FaFreeCodeCamp,
//   FaGithub,
//   FaGitlab,
//   FaInstagram,
//   FaLinkedin,
//   FaStackOverflow,
//   FaTwitch,
//   FaTwitter,
//   FaWhatsapp,
//   FaYoutube,
// } from "react-icons/fa";
// import { HiAtSymbol, HiMenuAlt4 } from "react-icons/hi";
// import { IoLockClosed } from "react-icons/io5";
// import { LuLink } from "react-icons/lu";
// import { MdDeleteOutline } from "react-icons/md";
// import { SiCodewars, SiFrontendmentor, SiHashnode } from "react-icons/si";
// import { TbWorldWww } from "react-icons/tb";
// import { TfiEmail } from "react-icons/tfi";
// import { useSelector } from "react-redux";

// type Props = {};

// const _links: LinkItem[] = [
//   {
//     key: "Github",
//     icon: <FaGithub />,
//   },
//   {
//     key: "Frontend Mentor",
//     icon: <SiFrontendmentor />,
//   },
//   {
//     key: "Twitter",
//     icon: <FaTwitter />,
//   },
//   {
//     key: "LinkedIn",
//     icon: <FaLinkedin />,
//   },
//   {
//     key: "Youtube",
//     icon: <FaYoutube />,
//   },
//   {
//     key: "Facebook",
//     icon: <FaFacebook />,
//   },
//   {
//     key: "Twitch",
//     icon: <FaTwitch />,
//   },
//   {
//     key: "Instagram",
//     icon: <FaInstagram />,
//   },
//   {
//     key: "Dev.to",
//     icon: <FaDev />,
//   },
//   {
//     key: "Codewars",
//     icon: <SiCodewars />,
//   },
//   {
//     key: "Freecodecamp",
//     icon: <FaFreeCodeCamp />,
//   },
//   {
//     key: "GitLab",
//     icon: <FaGitlab />,
//   },
//   {
//     key: "Hashnode",
//     icon: <SiHashnode />,
//   },
//   {
//     key: "Stack Overflow",
//     icon: <FaStackOverflow />,
//   },
//   {
//     key: "Whatsapp",
//     icon: <FaWhatsapp />,
//   },
//   {
//     key: "Personal Website",
//     icon: <TbWorldWww />,
//   },
// ];

// const Link = (props: Props) => {
//   const { user, loading, errorMessage } = useSelector(
//     (state: RootState) => state.auth,
//   );
//   const [links, setLinks] = useState([]);
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm<CreateLink>();
//   function submitForm(data: CreateLink) {
//     uploadLink(data);
//     console.log(data);
//     console.log("form submitted bum");
//   }
//   return (
//     <li className="mx-auto mt-4 flex h-[228px] w-[295px] flex-col gap-y-3 rounded-xl bg-lightGrey p-5 md:h-[400px] md:w-[640px]">
//       <div className="flex flex-row items-center justify-between">
//         <span className="flex items-center gap-x-2 font-bold text-grey">
//           Link #1
//           <HiMenuAlt4 />
//         </span>
//         <Button
//           size="sm"
//           startContent={<MdDeleteOutline className="md:h-5 md:w-5" />}
//           variant="ghost"
//           color="danger"
//         >
//           Delete
//         </Button>
//       </div>

//       <form
//         onSubmit={handleSubmit(submitForm)}
//         className="flex flex-col justify-center gap-y-3"
//       >
//         <div className="flex flex-col gap-y-3">
//           <label htmlFor="link" className="text-sm">
//             Platform
//           </label>
//           <Controller
//             name="platform"
//             control={control}
//             rules={{ required: "Please select a platform." }}
//             render={({ field }) => (
//               <Select {...field} startContent={<HiAtSymbol />}>
//                 {_links.map((link) => (
//                   <SelectItem key={link.key} startContent={link.icon}>
//                     {link.key}
//                   </SelectItem>
//                 ))}
//               </Select>
//             )}
//           />
//           {errors.platform && (
//             <span className="text-sm text-red-500">
//               {errors.platform.message}
//             </span>
//           )}
//         </div>

//         <div className="flex flex-col gap-y-3">
//           <label htmlFor="link" className="text-sm">
//             Link
//           </label>
//           <Input
//             label="link"
//             {...register("link", {
//               required: "Please provide a URL.",
//             })}
//             startContent={<LuLink />}
//             type="url"
//             placeholder="e.g. https://www.github.com/my-profile"
//           />
//         </div>
//         <button
//           className="rounded-md bg-primary text-center text-white"
//           type="submit"
//         >
//           submit
//         </button>
//       </form>
//     </li>
//   );
// };

// export default Link;


import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Select, SelectItem, Input } from '@nextui-org/react';
import { HiAtSymbol } from 'react-icons/hi';
import { LuLink } from 'react-icons/lu';
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube, FaFacebook, FaTwitch, FaInstagram, FaDev, FaFreeCodeCamp, FaGitlab, FaStackOverflow, FaWhatsapp } from 'react-icons/fa';
import { SiFrontendmentor, SiCodewars, SiHashnode } from 'react-icons/si';
import { TfiEmail } from 'react-icons/tfi';
import { TbWorldWww } from 'react-icons/tb';
import { LinkItem } from '@/types';

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
  {
    key: "Email",
    icon: <TfiEmail />,
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

interface CreateLink {
  user_id: string;
  link: string;
  platform: string;
}

function LinkForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateLink>();

  const onSubmit = (data: CreateLink) => {
    uploadLink(data);
    console.log(data);
    console.log("form submitted");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-y-3">
      <div className="flex flex-col gap-y-3">
        <label htmlFor="platform" className="text-sm">
          Platform
        </label>
        <Controller
          name="platform"
          control={control}
          rules={{ required: 'Platform is required' }}
          render={({ field }) => (
            <Select
              {...field}
              startContent={<HiAtSymbol />}
              errorMessage={errors.platform?.message}
            >
              {_links.map((link) => (
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
            required: 'Link is required',
            pattern: {
              value: /^https?:\/\/.+/,
              message: 'Please enter a valid URL',
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              startContent={<LuLink />}
              type="url"
              placeholder="e.g. https://www.github.com/my-profile"
              errorMessage={errors.link?.message}
            />
          )}
        />
      </div>
      <input type="hidden" {...register('user_id')} value="some-user-id" />
      <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 bg-primary rounded">
        Submit
      </button>
    </form>
  );
}

export default LinkForm;

// Mock function for uploadLink (replace with actual implementation)
function uploadLink(data: CreateLink) {
  // Implement your link upload logic here
  console.log('Uploading link:', data);
}