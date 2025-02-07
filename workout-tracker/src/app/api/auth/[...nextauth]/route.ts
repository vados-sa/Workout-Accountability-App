/*
CONFIGURING NextAuth
This file sets up authentication using NextAuth with a credentials provider,
allowing users to log in with an email and password, and manages sessions
using JWT.
*/

import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" }
      },
      authorize(credentials) {
        // Dummy user for demonstration
        const user = { id: "1", name: "John Doe", email: "john@example.com" };

        if (
          credentials?.email === "john@example.com" &&
          credentials?.password === "password123"
        ) {
          return user; // Successful login
        }
        return null; // Authentication failed
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login", // Redirect to your custom login page
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
//export default NextAuth(authOptions);
