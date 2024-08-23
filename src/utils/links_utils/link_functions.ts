import { CreateLink } from "@/types";
import { collection_id, database_id, databases } from "../../../appwrite";
import { ID } from "appwrite";
import { toast } from "react-toastify";

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

export { uploadLink };
