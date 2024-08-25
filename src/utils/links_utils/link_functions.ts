import { CreateLink } from "@/types";
import { collection_id, database_id, databases } from "../../../appwrite";
import { ID, Query } from "appwrite";
import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";

async function uploadLink(data: CreateLink, func: () => void) {
  try {
    await databases.createDocument(
      database_id as string,
      collection_id as string,
      ID.unique(),
      data,
    );
    toast.success('Link uploaded successfully')
    func()
    
    console.log(data)
  } catch (error: any) {
    toast.error('An error occured')
    console.log("an error occured");
    console.error("error happened :", error.message);
  }
}

async function getLinks (userId : string) {
  try {
    const result = await databases.listDocuments(
      database_id as string,
      collection_id as string,
      [
        Query.equal("userId", userId )
      ]
    )
    console.log(result)
    return result
  } catch (error : any) {
    console.error("An error occured, :" , error)
    console.log(error.message)
  }
}

const fetchLinks = createAsyncThunk(
  "link/fetchLinks",
  async (userId : string, {dispatch, rejectWithValue}) => {
    try {
      const result = await databases.listDocuments(
        database_id as string,
        collection_id as string,
        [
          Query.equal("userId", userId )
        ]
      )
      console.log(result)
      return result
    } catch (error : any) {
      console.error("An error occured, :" , error)
      console.log(error.message)
      return rejectWithValue(error.message); 
    }
  }
)


// also create one normal function for fetching links, so you can use react query to fetch and set the links just once and use the links from the cache

export { uploadLink, getLinks, fetchLinks };
