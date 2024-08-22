import { ID } from "appwrite";
import {
  account,
  bucket_id,
  collection_id,
  database_id,
  databases,
  storage,
} from "../../../../appwrite";
import { CreateAccount, CreateLink, Login, UpdateVerification } from "@/types";

const createUserAccount = async ({ email, password, name }: CreateAccount) => {
  return await account.create(ID.unique(), email, password, name);
};

const loginUser = async ({ email, password }: Login) => {
  try {
    const existingSession = await account.get();
    const isVerified = existingSession.emailVerification === true;

    if (existingSession) {
      if (isVerified) {
        return existingSession;
      } else {
        await verifyUserAccount();
        throw new Error("Email not verified. Please check your inbox.");
      }
    } else {
      const userSession = await account.createEmailPasswordSession(
        email,
        password,
      );
      const newSession = await account.get();
      const isNewUserVerified = newSession.emailVerification === true;

      if (isNewUserVerified) {
        return newSession;
      } else {
        await verifyUserAccount();
        throw new Error("Email not verified. Please check your inbox.");
      }
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const logoutUser = async () => {
  return await account.deleteSession("current");
};

async function verifyUserAccount() {
  return await account.createVerification("http://localhost:3000/verify");
}

async function checkEmailVerification() {
  const user = await account.get();
  console.log(user);
  return user.emailVerification;
}

async function updateVerification({ userId, secret }: UpdateVerification) {
  await account.updateVerification(userId, secret);
}

async function createLink({ user_id, link, platform }: CreateLink) {
  try {
    const response = await databases.createDocument(
      database_id as string,
      collection_id as string,
      ID.unique(),
      {
        user_id,
        link,
        platform,
      },
    );
  } catch (error: any) {
    console.error("Error creating link :", error.message);
    throw new Error(error.message);
  }
}

async function uploadAvatar(imageFile: File, file_id : string) {
  try {
    const response = await storage.createFile(
      bucket_id as string,
      file_id,
      imageFile,
    );
    console.log(response);
    return response;
  } catch (error: any) {
    console.error("There was an error while uploading avatar :", error.message);
    throw new Error();
  }
}

async function getAvatar(file_id: string) {
  try {
    const result = await storage.getFileDownload(bucket_id as string, file_id);

    const response = await fetch(result.href, { method: 'HEAD' });

    if (response.ok) { 
      // console.log(result);
      return result;
    } else {
      console.error("Invalid file URL, file may not exist");
      throw new Error("Failed to fetch avatar: Invalid file URL");
    }
  } catch (error: any) {
    console.error("There was an error while fetching avatar:", error.message);
    throw new Error("Failed to fetch avatar");
  }
}


const fetchImage = async (fileId: string) => {
  try {
    const url = storage.getFileView(bucket_id as string, fileId);
    console.log(url);
  } catch (error) {
    console.error("Error fetching image:", error);
  }
};

// use the authenticated user id to replace the uniqueID for storage and database purposes, cos the userid will always be available after login.
// Also, separate concerns in this file, all functions that don't concern authentication should be moved to another file.

export {
  createUserAccount,
  loginUser,
  logoutUser,
  updateVerification,
  checkEmailVerification,
  verifyUserAccount,
  uploadAvatar,
  getAvatar,
  fetchImage,
};
