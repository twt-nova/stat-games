import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { NextApiHandler } from "next";

console.log();

const authHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, {
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
      }),
    ],

    database: process.env.DATABASE_URL,
  });

export default authHandler;
