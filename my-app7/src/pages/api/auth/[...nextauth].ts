import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../../db.json";

function isEmailExists(email: string): boolean {
  for (const account of db.accounts) {
    if (account.email === email) {
      return true;
    }
  }
  return false;
}

function isPasswordCorrect(email: string, password: string): boolean {
  const account = db.accounts.find((acc: any) => acc.email === email);

  if (account && account.password === password) {
    return true;
  } else {
    return false;
  }
}

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "enter your email...",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "enter your password...",
        },
      },
      async authorize(credentials) {
        const { email, password }: any = credentials;

        if (password === "") {
          throw new Error("Password field can not be empty!");
        }

        if (!isEmailExists(email)) {
          throw new Error("User does not exist!");
        }

        if (isPasswordCorrect(email, password)) {
          const user = db.accounts.find(
            (account: any) => account.email === email
          );
          return {
            id: user!.id,
            email: user!.email,
            password: user!.password,
          };
        }

        throw new Error("Invalid password!");
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
});
