import { Account, Client, ID } from "appwrite";

const client = new Client();

client
client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_ID as string);

export const account = new Account(client);

interface CreateAccount {
  email: string;
  password: string;
  name : string;
}

interface LoginAccount {
  email: string;
  password: string;
}

async function createUserAccount({ email, password, name }: CreateAccount) {
  try {
    const user = await account.create(ID.unique(), email, password);
    if (user) {
      console.log("account created successfully");
      console.log(user)
      await loginUserAccount({ email, password });
      // return login functionality
    } else {
      console.log("account creation not successful");
      return;
    }
  } catch (error) {
    console.error("An error occured :", error);
    throw error;
  }
}

async function loginUserAccount({ email, password }: LoginAccount) {
  try {
    const loginSession = await account.createEmailPasswordSession(
      email,
      password,
    );
    console.log(loginSession)
    return loginSession;
  } catch (error) {
    console.log("Error logging in:", error);
    throw error;
  }
}

async function getCurrentUser() {
  try {
    return await account.get();
  } catch (error) {
    console.log(error);
  }
}

async function logoutUser() {
  try {
    return await account.deleteSession("current");
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { createUserAccount, loginUserAccount, getCurrentUser, logoutUser };


