import { CreateLink } from "@/types";
import { collection_id, database_id, databases } from "../../../appwrite";
import { ID } from "appwrite";

async function uploadLink(data: CreateLink) {
  try {
    await databases.createDocument(
      database_id as string,
      collection_id as string,
      ID.unique(),
      data,
    );
    console.log(data)
  } catch (error: any) {
    console.log("an error occured");
    console.error("error happened :", error.message);
  }
}

export { uploadLink };
