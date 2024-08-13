import { ID } from "appwrite";
import { account } from "../../../../appwrite";
import { CreateAccount, Login, UpdateVerification } from "@/types";

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
        throw new Error('Email not verified. Please check your inbox.');
      }
    } else {
      const userSession = await account.createEmailPasswordSession(email, password);
      const newSession = await account.get();
      const isNewUserVerified = newSession.emailVerification === true;

      if (isNewUserVerified) {
        return newSession; 
      } else {
        await verifyUserAccount();
        throw new Error('Email not verified. Please check your inbox.');
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

export {
  createUserAccount,
  loginUser,
  logoutUser,
  updateVerification,
  checkEmailVerification,
  verifyUserAccount,
};
