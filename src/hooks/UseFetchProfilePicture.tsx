import { getAvatar } from "@/app/store/authSlice/authServices";
import { setProfilePicture } from "@/app/store/authSlice/authSlice";
import { AppDispatch, RootState } from "@/app/store/store";
import { useQuery } from "@tanstack/react-query";
import { UploadFile } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useFetchProfilePicture = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading, errorMessage } = useSelector(
    (state: RootState) => state.auth,
  );
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["profilePicture", user?.$id],
    queryFn: () => getAvatar(user.$id),
    enabled: !!user?.$id,
  });

  useEffect(() => {
    if (data) {
      dispatch(setProfilePicture(data.href));
      setFileList([
        {
          uid: "-1",
          name: "Profile Picture",
          status: "done",
          url: data.href,
        },
      ]);
    }
  }, [data, dispatch]);


  return {data, fileList, setFileList, isLoading, error}

}

export default useFetchProfilePicture;
