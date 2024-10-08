import { UploadFile } from "antd";

interface Login {
  password: string;
  email: string;
}

interface CreateAccount {
  password: string;
  email: string;
  name: string;
}

interface UpdateVerification {
  userId: string;
  secret: string;
}

interface LinkItem {
  key: string;
  icon: React.ReactNode;
}

interface CreateLink {
  userId: string;
  userName : string;
  userEmail : string;
  link: string;
  platform: string;
}
interface EditLink {
  link: string;
  platform: string;
}

export type FileType = UploadFile["originFileObj"];

export type { Login, CreateAccount, UpdateVerification, LinkItem, CreateLink, EditLink };
