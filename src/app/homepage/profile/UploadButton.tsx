import React from "react";
import { FaImage } from "react-icons/fa";

type Props = {
  onClick: () => void;
};

const UploadButton = ({ onClick }: Props) => {
  return (
    <button
      className="flex flex-col items-center gap-y-2 text-primary"
      type="button"
      onClick={onClick}
    >
      <FaImage className="h-8 w-8" />
      <div>+ Upload Image</div>
    </button>
  );
};

export default UploadButton;
