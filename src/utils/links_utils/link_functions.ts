import { CreateLink, EditLink } from "@/types";
import { collection_id, database_id, databases } from "../../../appwrite";
import { ID, Query } from "appwrite";
import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { store } from "@/app/store/store";
import { setLoadingState } from "@/app/store/linkSlice/linkSlice";

async function uploadLink(data: CreateLink) {
  try {
    await databases.createDocument(
      database_id as string,
      collection_id as string,
      ID.unique(),
      data,
    );

  } catch (error: any) {
    throw new Error(error.message)
  }
}

async function getLinks(userId : string) {
  // if (!user.emailVerification) return {documents : [], total : 0};
  try {
    const result = await databases.listDocuments(
      database_id as string,
      collection_id as string,
      [Query.equal("userId", userId)],
    );
    return result;
  } catch (error: any) {
  }
}

const fetchLinks = createAsyncThunk(
  "link/fetchLinks",
  async (userId: string, { dispatch, rejectWithValue }) => {
    try {
      const result = await databases.listDocuments(
        database_id as string,
        collection_id as string,
        [Query.equal("userId", userId)],
      );
      return result;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

async function patchLink(document_id: string, data: EditLink ) {
  try {
    store.dispatch(setLoadingState(true))
    const result = await databases.updateDocument(
      database_id as string,
      collection_id as string,
      document_id,
      data,
    );
    toast.success("Link edited successfully");
    return result;
  } catch (error: any) {
    toast.error(error.message);
  } finally {
    store.dispatch(setLoadingState(false))
  }
}
async function deleteLink(document_id: string) {
  try {
    store.dispatch(setLoadingState(true))
    const result = await databases.deleteDocument(
      database_id as string,
      collection_id as string,
      document_id,
    );
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  } finally {
    store.dispatch(setLoadingState(false))
  }
}

export { uploadLink, getLinks, fetchLinks, patchLink, deleteLink };
