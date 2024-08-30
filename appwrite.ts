import { Account, Client, Databases, ID, Storage } from "appwrite";

const client = new Client();

export const collection_id = process.env.NEXT_PUBLIC_COLLECTION_ID
export const database_id = process.env.NEXT_PUBLIC_DATABASE_ID
export const bucket_id = process.env.NEXT_PUBLIC_BUCKET_ID
export const account = new Account(client);
export const storage = new Storage(client)
export const databases = new Databases(client)

client;
client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_ID as string);


interface CreateAccount {
  email: string;
  password: string;
  name: string;
}

interface LoginAccount {
  email: string;
  password: string;
}



async function logoutUser() {
  try {
    return await account.deleteSession("current");
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function verifyUserAccount() {
  try {
    const verificationData = await account.createVerification(
      "http://localhost:3000/verify",
    );
    console.log("verification email sent");
    console.log(verificationData);
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
}

async function updateVerification(userId: string, secret: string) {
  try {
    await account.updateVerification(userId, secret);
  } catch (error: any) {
    throw error;
  }
}

async function checkEmailVerification() {
  try {
    const user = await account.get();
    return user.emailVerification;
  } catch (error: any) {
    throw error;
  }
}


async function passwordRecovery(email: string) {
  return await account.createRecovery(
    email,
    "http://localhost:3000/password-reset",
  );
}

async function updateRecovery(
  password: string,
  userId: string,
  secret: string,
) {
  return await account.updateRecovery(userId, secret, password);
}
export {
  updateVerification,
  checkEmailVerification,
  passwordRecovery,
  updateRecovery,
  client
};
