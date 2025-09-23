import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";

const connectDB = async () => {
    try {

       const connectionInstance=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n mongodb connected !! DB HOST ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("MONGODB CONNECTION FAILED :", error);
    }
}

export default connectDB
