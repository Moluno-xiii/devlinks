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
  userId : string;
  secret : string;
}

export type { Login, CreateAccount, UpdateVerification };
