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

async function uploadAvatar(imageFile: File) {
  const file_id = ID.unique();
  try {
    const response = await storage.createFile(bucket_id as string, file_id, imageFile);
    return response
  } catch (error: any) {
    console.error("There was an error while uploading avatar :", error.message);
    throw new Error();
  }
}
function getAvatar(file_id: string) {
  try {
    const result = storage.getFileDownload(bucket_id as string, file_id);
    return result;
  } catch (error: any) {
    console.error("There was an error while uploading avatar :", error.message);
    throw new Error();
  }
}

export {
  createUserAccount,
  loginUser,
  logoutUser,
  updateVerification,
  checkEmailVerification,
  verifyUserAccount,
};
