import { getAvatar } from "@/app/store/authSlice/authServices";
import { setProfilePicture } from "@/app/store/authSlice/authSlice";
import { AppDispatch, RootState } from "@/app/store/store";
import { UploadFile } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const useFetchProfilePicture = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading, errorMessage } = useSelector(
    (state: RootState) => state.auth,
  );
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  // useEffect(() => {
  //   const fetchProfilePicture = async () => {
  //     try {
  //       // const imageUrl = getAvatar("66c64ab4003e69c283fb");
  //       // const imageUrl = getAvatar(file_id);
  //       // const imageUrl = getAvatar("11111");
  //       const imageUrl = await getAvatar(user.$id);
  //       console.log(user.$id)
  //       dispatch(setProfilePicture(imageUrl.href))
  //       if (typeof imageUrl.href === "string" && imageUrl.href.length > 0) {
  //         setFileList([
  //           {
  //             uid: "-1",
  //             name: "Profile Picture",
  //             status: "done",
  //             url: imageUrl.href,
  //           },
  //         ]);
  //       }
  //     } catch (error) {
  //       console.error("Failed to fetch profile picture:", error);
  //     }
  //   };

  //   fetchProfilePicture();
  // }, [user?.$id]);
  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const imageUrl = await getAvatar("dfddddd");

        // If getAvatar is successful, dispatch the action
        dispatch(setProfilePicture(imageUrl.href));

        // Set the file list for display
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
        // If there's an error, log it and don't dispatch
        console.error("Failed to fetch profile picture:", error);
        return;
      }
    };

    if (user?.$id) {
      fetchProfilePicture();
    }
  }, [user?.$id, dispatch]);
  return {fileList, setFileList}
};
// 66c64c56000e8f8cb977
export default useFetchProfilePicture;
