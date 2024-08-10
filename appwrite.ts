import { Account, Client, ID } from "appwrite";
import { error } from "console";

const client = new Client();

client;
client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_ID as string);

export const account = new Account(client);

interface CreateAccount {
  email: string;
  password: string;
  name: string;
}

interface LoginAccount {
  email: string;
  password: string;
}

async function createUserAccount({ email, password, name }: CreateAccount) {
  try {
    const userAccount = await account.create(
      ID.unique(),
      email,
      password,
      name,
    );
    if (userAccount) {
      await verifyUserAccount();
    }
    console.log("account created successfully, awaiting verification");
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
}

async function verifyUserAccount() {
  try {
    const verificationData = await account.createVerification(
      "http://localhost:3000/verify",
    );
    console.log("verification email sent");
    console.log(verificationData)
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
}

async function updateVerification(userId: string, secret: string) {
  try {
    await account.updateVerification(userId, secret);
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
}

async function checkEmailVerification() {
  try {
    const user = await account.get();
    return user.emailVerification;
  } catch (error: any) {
    console.log("Error checking email verification:", error.message);
    throw error;
  }
}

async function loginUser({ email, password }: LoginAccount) {
  // since the user cannot verify their account without creating a session, create a session almost like this in the create account function, then redirect them to he email verification link.
  // if for any reason the user neglects the verification, and tries to login directly, check if the user has a session with that email, using checkEmailVerification, and if they have an account but haven't verified, create a page for users that have accounts but haven't verified, and send them there, where they will be sent another verification email. Only then can they access the application fully. 
  try {
    const userSession = await account.createEmailPasswordSession(
      email,
      password,
    );
    const isVerified = await checkEmailVerification();

    if (!isVerified) {
      console.log(
        "Email not verified. Please verify your email before logging in.",
      );
      await account.deleteSession("current");
      return false;
    }
    console.log("user logged in sucessfully");
    console.log(userSession);
    return true;
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
}
export { createUserAccount, loginUser, updateVerification };
