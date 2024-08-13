import { ID } from "appwrite";
import { account } from "../../../../appwrite";
import { CreateAccount, Login, UpdateVerification } from "@/types";

const createUserAccount = async ({ email, password, name }: CreateAccount) => {
  return await account.create(ID.unique(), email, password, name);
};

const loginUser = async ({ email, password }: Login) => {
  return await account.createEmailPasswordSession(email, password);
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
