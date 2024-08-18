"use client";

import React, { useState } from "react";
import { Image, Upload } from "antd";
import type { UploadFile, UploadProps } from "antd";
import { FaImage } from "react-icons/fa";
import { fetchImage, getAvatar, uploadAvatar } from "@/app/store/authSlice/authServices";
import { toast } from "react-toastify";

type FileType = UploadFile["originFileObj"];

const getBase64 = (file: FileType | undefined): Promise<string> =>
  new Promise((resolve, reject) => {
    if (!file) {
      return reject(new Error("File is undefined"));
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const UploadFile: React.FC = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

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

    const file = fileList[0].originFileObj as File;
    if (file) {
      try {
        await uploadAvatar(file);
        toast.success("Profile picture uploaded successfully");
        console.log("trying to upload file");
      } catch (error) {
        console.log("an error occured");
        console.error("Upload failed:", error);
      }
    } else {
      console.log("no file");
    }
  };

  
  const handleDownloadAvatar = async () => {
    try {
      getAvatar("66c26b26002948bae558");
      toast.success("Profile picture downloaded");
      console.log("trying to download file");
    } catch (error) {
      console.log("an error occured");
      console.error("download failed:", error);
    }
  };

  const uploadButton = (
    <button
      className="flex flex-col items-center gap-y-2 text-primary"
      type="button"
      onClick={handleUpload}
    >
      <FaImage className="h-8 w-8" />
      <div>+ Upload Image</div>
    </button>
  );

  return (
    <>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <>
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
        </>
      )}
      <button
        onClick={handleUpload}
        className="rounded-md border bg-primary p-2 text-white"
      >
        upload image
      </button>
      <button
        // onClick={() => fetchImage("66c27755000ac5154bcb")}
        // onClick={() => fetchImage("66c26b26002948bae558")}
        onClick={() => fetchImage("66c273e50027228045bc")}
        className="rounded-md border bg-primary p-2 text-white"
      >
        download image
      </button>
    </>
  );
};

export default UploadFile;
