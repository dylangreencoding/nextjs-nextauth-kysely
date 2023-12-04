import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { getUser } from "@/kysely/users-table";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials, req) {
        
        const response = await getUser(credentials?.username || '');
        const user = response[0];

        const passwordCorrect = await compare(credentials?.password || '', user.pw)

        // as any - quick fix for ts
        if (passwordCorrect) {
          return user as any;
        }
        
        return null;
      }
    })
  ]
});

export {handler as GET, handler as POST}