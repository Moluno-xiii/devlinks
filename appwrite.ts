import { Account, Client, ID } from "appwrite";

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

// async function createUserAccount({ email, password, name }: CreateAccount) {
//   try {
//     const user = await account.create(ID.unique(), email, password, name);

//     await verifyAccount()
//     // if (user) {
//     //   // await loginUserAccount({ email, password });
//     //   // await verifyAccount();

//     //   const response = await account.createVerification(
//     //     "http://localhost:3000/verify",
//     //   );
//     //   console.log(response);
//     //   return response;

//     //   console.log("account created successfully");
//     //   // account.updateName(name);
//     //   console.log(user);
//     // } else {
//     //   console.log("account creation not successful");
//     //   return;
//     // }
//   } catch (error) {
//     console.error("An error occured :", error);
//     throw error;
//   }
// }

// async function createUserAccount({ email, password, name }: CreateAccount) {
//   try {
//     // await logoutUser()
//     const newUser = await account.create(ID.unique(), email, password);
//     await account.createSession(email, password);
//     await account.createVerification("http://localhost:3000/verify");
//     console.log("email  has been sent to your account");
//     console.log(newUser)
//   } catch (error: any) {
//     console.log(error.messsage);
//   }
// }

async function loginUserAccount({ email, password }: LoginAccount) {
  try {
    await logoutUser();
    const loginSession = await account.createEmailPasswordSession(
      email,
      password,
    );
    console.log(loginSession);
    console.log("login attempted");
    return loginSession;
  } catch (error) {
    console.log("Error logging in:", error);
    throw error;
  }
}

async function getCurrentUser() {
  try {
    const data = await account.get();
    console.log(data);
    return data;
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

// async function verifyAccount() {
//   try {
//     const response = await account.createVerification(
//       "http://localhost:3000/verify",
//     );
//     console.log("verification email has been sent");
//     console.log(response);
//     return response;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }

async function verifyLogin(userId: string, secret: string) {
  try {
    const response = await account.updateVerification(userId, secret);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function createUserAccount({ email, password, name }: CreateAccount) {
  try {
    // Create the user account
    await logoutUser()
    const user = await account.create(ID.unique(), email, password, name);

    // Log in the user immediately to create a session
    const loginSession = await account.createEmailPasswordSession(email, password);

    if (loginSession) {
      console.log("User logged in successfully");

      // Send verification email after logging in
      await verifyAccount();
    }
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

async function verifyAccount() {
  try {
    const response = await account.createVerification(
      "http://localhost:3000/verify"
    );
    console.log("Verification email has been sent");
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error in sending verification email:", error);
    throw error;
  }
}


export {
  createUserAccount,
  loginUserAccount,
  getCurrentUser,
  logoutUser,
  verifyLogin,
};
