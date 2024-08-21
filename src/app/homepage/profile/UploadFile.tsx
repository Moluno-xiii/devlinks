"use client";

import React, { useState } from "react";
import { Image, Upload } from "antd";
import type { UploadFile, UploadProps } from "antd";
import { uploadAvatar } from "@/app/store/authSlice/authServices";
import { toast } from "react-toastify";
import { RcFile } from "antd/lib/upload/interface";
import UploadButton from "./UploadButton";
import UseFetchProfilePicture from "@/hooks/UseFetchProfilePicture";
import { FileType } from "@/types";
import { getBase64 } from "@/utils/getBase64";
import { Avatar, Button } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const UploadFile: React.FC = () => {
  const { user, profilePicture } = useSelector(
    (state: RootState) => state.auth,
  );
  console.log(profilePicture)
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const { fileList, setFileList } = UseFetchProfilePicture();

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleUpload = async () => {
    if (fileList.length === 0) {
      console.log("no fileList");
      return;
    }

    const file = fileList[0].originFileObj as RcFile;
    if (file) {
      try {
        await uploadAvatar(file, user.$id);
        toast.success("Profile picture uploaded successfully");
        console.log("trying to upload file");
      } catch (error) {
        console.log("an error occurred");
        console.error("Upload failed:", error);
      }
    } else {
      console.log("no file");
    }
  };

  if (profilePicture.length > 1) return <Avatar src={profilePicture} className="w-20 h-20" />

  return (
    <>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        beforeUpload={() => false}
      >
        {fileList.length >= 1 ? null : <UploadButton onClick={handleUpload} />}
      </Upload>
      <Image
        wrapperStyle={{ display: "none" }}
        preview={{
          visible: previewOpen,
          onVisibleChange: (visible) => setPreviewOpen(visible),
          afterOpenChange: (visible) => !visible && setPreviewImage(""),
        }}
        src={previewImage}
        alt="uploaded image"
      />
      {!profilePicture && (
        <Button
          onClick={handleUpload}
          variant="solid"
          color="primary"
          className="w-40"
        >
          Save Changes
        </Button>
      )}
    </>
  );
};

export default UploadFile;
