import React from 'react'
import mongoose from "mongoose";

const mongodb_uri = process.env.mongodb_uri;

let isConnected = false;


const connectdb = async () => {
    if (isConnected) return;

    try {
        await mongoose.connect(mongodb_uri, {
            dbName: "Alethea",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
    } catch(error){
        console.error("db connection failed");
    }
}

export default connectdb
