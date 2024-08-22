import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { collection_id, database_id, databases } from '../../appwrite';

type FormData = {
  url: string;
  platform: string;
};

type Props = {}

const useUploadLink = (props: Props) => {
  // React Query mutation to handle the upload
  const uploadLink = async (data: FormData) => {
    const { url, platform } = data;
    const document_id = "unique_document_id"; // Replace this with the actual document ID you want to use

    try {
      await databases.createDocument(
        database_id as string,
        collection_id as string,
        document_id,
        { url, platform }
      );
      toast.success("Link uploaded successfully");
    } catch (error: any) {
      console.error("An error occurred while uploading the link:", error.message);
      throw new Error("Failed to upload link");
    }
  };

  // React Query mutation to handle the upload
  const mutation = useMutation(uploadLink);
// const mutation = useMutation<void, Error, FormData>((data: FormData) => uploadLink(data));


  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };
  return (
    <div>useUploadLink</div>
  )
}

export default useUploadLink