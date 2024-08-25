import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import UploadLinkForm from "./UploadLinkForm";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";


type Props = {
  closeAddLinkSection : () => void;
};

const AddLink = ({closeAddLinkSection}: Props) => {
  const [link, setLink] = useState<any>(null)
  const [activeLink, setActiveLink] = useState<string>('')
  const { links, loading, errorMessage } = useSelector(
    (state: RootState) => state.link,
  );

  return <ul>
      <li className="mx-auto mt-4 flex h-[228px] w-[295px] flex-col gap-y-3 rounded-xl bg-lightGrey p-5 md:h-[280px] md:w-[640px]">
      <div className="flex flex-row items-center justify-between">
        <span className="flex items-center gap-x-2 font-bold text-grey">
          <HiMenuAlt4 />
          Link #{links.total + 1}
        </span>
      </div>
      <UploadLinkForm onCloseAddLink={closeAddLinkSection} />
    </li>
  </ul>
};

export default AddLink;
