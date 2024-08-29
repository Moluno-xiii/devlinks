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
import { Avatar, Button, useDisclosure } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import ChangeProfilePictureModal from "./ChangeProfilePictureModal";
import { FaCamera } from "react-icons/fa";
import Loader from "@/components/UI/Loader";

const UploadFile: React.FC = () => {
  const { user, profilePicture } = useSelector(
    (state: RootState) => state.auth,
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const { fileList, setFileList, isLoading, error } = UseFetchProfilePicture();

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

  if (isLoading) return <Loader />;

  if (profilePicture) {
    return (
      <div className="relative">
        <Avatar
          src={profilePicture}
          alt="Profile Picture"
          className="h-40 w-40"
        />
        <ChangeProfilePictureModal
          isOpen={isOpen}
          onOpen={onOpen}
          onOpenChange={onOpenChange}
        />
        <Button
          isIconOnly
          color="primary"
          aria-label="change profile picture"
          className="absolute -bottom-3"
          onPress={onOpen}
        >
          <FaCamera />
        </Button>
      </div>
    );
  }

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
