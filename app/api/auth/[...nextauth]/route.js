import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "@/models/user";

export const authoptions =  NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    callbacks:{
        async signIn({user, account , profile, email , credentials}){
            if(account.provider == "github"){
                // connect to the datbase 
                try {
                    await mongoose.connect("mongodb://localhost:27017/flashify");
                // check if the user exist or not if not so please add them and if exist so just login dont make change in db 
                const currentUser = await User.findOne({ email: user.email });
                if (!currentUser) {
                    // Create a new user if doesn't exist
                    const newUser = new User({
                        name: profile.name || user.name,
                        email: user.email
                    });
                    await newUser.save();
                }
                } catch (error) {
                    console.error("MongoDB connection error:", error);
                    return false;
                }
                return true;
            }
        }
    }
})

export {authoptions as GET, authoptions as POST}