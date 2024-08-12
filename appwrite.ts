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
    const session = await account.createEmailPasswordSession(email, password);
    if (userAccount) {
      await verifyUserAccount();
      setTimeout(
        async () => {
          const isVerified = await checkEmailVerification();
          if (!isVerified) {
            await logoutUser();
            console.log("Session expired due to lack of verification.");
          }
        },
        10 * 60 * 1000,
      ); // 10 minutes timeout
    }
    console.log("account created successfully, awaiting verification");
  } catch (error: any) {
    console.log(error.message);
    throw error;
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
    console.log(error.message);
    throw error;
  }
}

async function checkEmailVerification() {
  try {
    const user = await account.get();
    console.log(user);
    return user.emailVerification;
  } catch (error: any) {
    console.log("Error checking email verification:", error.message);
    throw error;
  }
}

async function loginUser({ email, password }: LoginAccount) {
  try {
    const existingSession = await account.get();
    const isVerified = existingSession.emailVerification === true;
    if (existingSession) {
      if (isVerified) {
        // login and route the user
        console.log(existingSession);
      } else {
        // alert that they havent been verified and route them to the page that says they should check their inbox for their verification email
        await verifyUserAccount();
      }
    } else {
      const userSession = await account.createEmailPasswordSession(
        email,
        password,
      );
      const newSession = account.get();
      const isNewUserVerified = (await newSession).emailVerification === true;
      if (isNewUserVerified) {
        // login and route the user
        console.log("logged in new user:", newSession);
      } else {
        // alert that they havent been verified and route them to the page that says they should check their inbox for their verification email
        await verifyUserAccount();
      }
      console.log(userSession);
      console.log("user logged in sucessfully");
      // route the user to the required page after login
    }
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
}

async function passwordRecovery(email: string) {
  return await account.createRecovery(
    email,
    "http://localhost:3000/password-reset",
  );
}
async function updateRecovery(password: string, userId : string, secret : string) {
  return await account.updateRecovery(
    userId,
    secret,
    password,
  );
}
export {
  createUserAccount,
  loginUser,
  updateVerification,
  checkEmailVerification,
  passwordRecovery,
  updateRecovery
};
