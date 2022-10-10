import NextAuth, { type NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import { env } from "../../../env/server.mjs";
import { useQuery } from "@tanstack/react-query";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    async signIn({ user }) {
      try {
        const userQuery = await prisma.user.findFirstOrThrow({
          where: { email: user?.email },
        });
        if (userQuery) return true;
        return false;
      } catch {
        return false;
      }
    },
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      maxAge: 60 * 60, // Email link is valid for 1 hour
    }),
  ],
};

export default NextAuth(authOptions);
