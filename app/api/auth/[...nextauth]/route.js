import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import mongoose from "mongoose"
import User from "@/models/user"

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        try {
          // Use your Atlas connection string instead of localhost
          await mongoose.connect(process.env.MONGODB_URI)

          const currentUser = await User.findOne({ email: user.email })
          if (!currentUser) {
            const newUser = new User({
              name: profile.name || user.name,
              email: user.email,
            })
            await newUser.save()
          }
        } catch (error) {
          console.error("MongoDB connection error:", error)
          return false
        }
      }
      return true
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
