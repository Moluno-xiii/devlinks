import { ID } from 'appwrite';
import {
  account,
  bucket_id,
  storage,
} from '../../../../appwrite';
import { toast } from 'react-toastify';
import { CreateAccount, UpdateVerification } from '@/types';


const logoutUser = async () => {
  return await account.deleteSession('current');
};


async function createUserAccount({ email, password, name }: CreateAccount, dispatch : (action : any) => void) {
  try {
    const userAccount = await account.create(ID.unique(), email, password, name);
  } catch (error: any) {
    toast.error("Failed to create account: " + error.message);
    throw error;
  }
}


async function verifyUserAccount() {
  try {
    const session = account.get()
    const verificationData = await account.createVerification(
      "http://localhost:3000/verify",
    );
  } catch (error: any) {
    throw error;
  }
}

async function checkEmailVerification() {
  const user = await account.get();
  return user.emailVerification;
}

async function updateVerification({ userId, secret }: UpdateVerification) {
  await account.updateVerification(userId, secret);
}

async function getAvatar(file_id: string) {
  try {
    const result = await storage.getFileDownload(bucket_id as string, file_id);
    
    const response = await fetch(result.href, { method: 'HEAD' });
    
    if (response.ok) {
      return result;
    } else {
      throw new Error('Failed to fetch avatar: Invalid file URL');
    }
  } catch (error: any) {
    throw new Error('Failed to fetch avatar');
  }
}

const fetchImage = async (fileId: string) => {
  try {
    const url = storage.getFileView(bucket_id as string, fileId);
  } catch (error) {
  }
};

async function uploadAvatar(imageFile: File, file_id: string) {
  try {
    const response = await storage.createFile(
      bucket_id as string,
      file_id,
      imageFile
    );
    return response;
  } catch (error: any) {
    throw new Error();
  }
}

async function updateAvatar(imageFile: File, file_id: string) {
  try {
    await deleteAvatar(file_id);
    const response = await storage.createFile(
      bucket_id as string,
      file_id,
      imageFile
    );
    return response;
  } catch (error: any) {
    throw new Error();
  }
}

async function deleteAvatar(file_id: string) {
  try {
    const response = await storage.deleteFile(bucket_id as string, file_id);
    return response;
  } catch (error: any) {
    throw new Error();
  }
}


async function passwordRecovery(email: string) {
  try {
    await account.createRecovery(email, 'http://localhost:3000/password-reset');
    toast.success('Password recovery sent successfully!, check your inbox.');
  } catch (error) {
    toast.error('Failed to send password recovery link. Please try again.');
  }
}

async function updateRecovery(
  password: string,
  userId: string,
  secret: string
) {
  try {
    await account.updateRecovery(userId, secret, password);
    toast.success('Password updated successfully successfully!');
  } catch (error) {
    toast.error('Failed to update password. Please try again.');
  }
}

export {
  logoutUser,
  updateVerification,
  checkEmailVerification,
  verifyUserAccount,
  uploadAvatar,
  getAvatar,
  fetchImage,
  updateAvatar,
  deleteAvatar,
  passwordRecovery,
  updateRecovery,
  createUserAccount
};
