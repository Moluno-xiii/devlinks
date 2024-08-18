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
  user_id: string;
  link: string;
  platform: string;
}

export type { Login, CreateAccount, UpdateVerification, LinkItem, CreateLink };
