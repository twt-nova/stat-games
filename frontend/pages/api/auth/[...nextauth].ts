import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { NextApiHandler } from "next";

<<<<<<< HEAD
console.log();

=======
>>>>>>> 22d34a20d17a4df2f0d2236841bbe4bc5dca8705
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
