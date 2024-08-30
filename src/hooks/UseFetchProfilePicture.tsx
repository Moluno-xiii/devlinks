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
      console.log(data)
      console.log(user)
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

// Object { "$id": "66bb73470016621da43e", bucketId: "66be8cdc001ef1920a3e", "$createdAt": "2024-08-30T02:07:25.563+00:00", "$updatedAt": "2024-08-30T02:07:25.563+00:00", "$permissions": (3) […], name: "Screenshot from 2024-08-27 22-05-53.png", signature: "8f29e3fafe55274f90ac4b86b5a71023", mimeType: "image/png", sizeOriginal: 257717, chunksTotal: 1, … }
// ​
// "$createdAt": "2024-08-30T02:07:25.563+00:00"
// ​
// "$id": "66bb73470016621da43e"
// ​
// "$permissions": Array(3) [ 'read("user:66bb73470016621da43e")', 'update("user:66bb73470016621da43e")', 'delete("user:66bb73470016621da43e")' ]
// ​
// "$updatedAt": "2024-08-30T02:07:25.563+00:00"
// ​
// bucketId: "66be8cdc001ef1920a3e"
// ​
// chunksTotal: 1
// ​
// chunksUploaded: 1
// ​
// mimeType: "image/png"
// ​
// name: "Screenshot from 2024-08-27 22-05-53.png"
// ​
// signature: "8f29e3fafe55274f90ac4b86b5a71023"
// ​
// sizeOriginal: 257717
// ​
// <prototype>: Object { … }