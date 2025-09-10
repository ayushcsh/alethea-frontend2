import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account }) {
      if (account?.provider === "github") {
        return true; // ✅ allow GitHub login without DB
      }
      return false;
    },
  },
});

export { authoptions as GET, authoptions as POST }; 
