import NextAuth from "next-auth";
import { authConfig } from "./authconfig";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "./connectDb";
import { User } from "./models";
import bcrypt from "bcryptjs";

const login = async (credentials: { username: string; password: string }) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });
    if (!user) throw new Error("wrong username");
    const isMatchPassword = await bcrypt.compare(
      credentials.password,
      user.password,
    );
    if (!isMatchPassword) throw new Error("wrong password");

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials: any) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }: any) {
      if(token){
        session.user.username = token.username;
        session.user.img = token.img;
      }
        return session;
    },
  }
});
