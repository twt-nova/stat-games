import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { NextApiHandler } from "next";

console.log(process.env.GITHUB_ID);

const authHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, {
    providers: [
      Providers.GitHub({
        clientId: "ca3f8474364261441f5c",
        clientSecret: "0fb978efcae717f9a26818a84643b32ea3ae1784",
      }),
    ],

    database: "mysql://root:rubikovakocka123A!@127.0.0.1:3306/statgames",
  });

export default authHandler;
