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

const UploadFile: React.FC = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const {fileList, setFileList} = UseFetchProfilePicture()

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
        await uploadAvatar(file);
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
      <button
        onClick={handleUpload}
        className="rounded-md border bg-primary p-2 text-white"
      >
        upload image
      </button>
    </>
  );
};

export default UploadFile;
