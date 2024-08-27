import { CreateLink, EditLink } from "@/types";
import { collection_id, database_id, databases } from "../../../appwrite";
import { ID, Query } from "appwrite";
import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { store } from "@/app/store/store";
import { setLoadingState } from "@/app/store/linkSlice/linkSlice";

async function uploadLink(data: CreateLink, func: () => void) {
  try {
    store.dispatch(setLoadingState(true))
    await databases.createDocument(
      database_id as string,
      collection_id as string,
      ID.unique(),
      data,
    );
    toast.success("Link uploaded successfully");
    func();

    console.log(data);
  } catch (error: any) {
    toast.error("An error occured");
    console.log("an error occured");
    console.error("error happened :", error.message);
  }finally {
    store.dispatch(setLoadingState(false))
  }
}

async function getLinks(userId: string) {
  try {
    const result = await databases.listDocuments(
      database_id as string,
      collection_id as string,
      [Query.equal("userId", userId)],
    );
    console.log(result);
    return result;
  } catch (error: any) {
    console.error("An error occured, :", error);
    console.log(error.message);
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
      console.log(result);
      return result;
    } catch (error: any) {
      console.error("An error occured, :", error);
      console.log(error.message);
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
    console.log(result);
    toast.success("Link edited successfully");
    return result;
  } catch (error: any) {
    toast.error(error.message);
    console.error("An error occured, :", error);
    console.log(error.message);
  } finally {
    store.dispatch(setLoadingState(false))
  }
}

export { uploadLink, getLinks, fetchLinks, patchLink };
