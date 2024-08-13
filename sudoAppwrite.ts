const sdk = require("node-appwrite");

const client = new sdk.client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_ID as string).setKey(process.env.NEXT_PUBLIC_API_KEY)

  const users = new sdk.Users(client)
  

  async function getUserById(userID : string) {
    await users.get(userID)
  }


  export {getUserById}