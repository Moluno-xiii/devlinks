import { getAvatar } from "@/app/store/authSlice/authServices";
import { UploadFile } from "antd";
import { useEffect, useState } from "react";


const useFetchProfilePicture = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const imageUrl = getAvatar("66c26b26002948bae558");
        if (typeof imageUrl.href === "string" && imageUrl.href.length > 0) {
          setFileList([
            {
              uid: "-1",
              name: "Profile Picture",
              status: "done",
              url: imageUrl.href,
            },
          ]);
        }
      } catch (error) {
        console.error("Failed to fetch profile picture:", error);
      }
    };

    fetchProfilePicture();
  }, []);
  return {fileList, setFileList}
};

export default useFetchProfilePicture;
