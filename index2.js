import mongoose from "mongoose";
import {DB_NAME} from "./src/constants.js";


const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri.startsWith("mongodb://") && !mongoUri.startsWith("mongodb+srv://")) {
            throw new Error("Invalid MongoDB URI scheme. Ensure it starts with 'mongodb://' or 'mongodb+srv://'.");
        }
        const connectionInstance = await mongoose.connect(`${mongoUri}/${DB_NAME}`) 
        console.log(`MongoDB connected: ${connectionInstance.connection.name}`);
        // console.log(connectionInstance);
        // Connection {
        //   config: { host: 'localhost', user: 'root', ... },
        //   state: 'authenticated',
        //   threadId: 23,
        //   ...
        //   query: [Function: query],
        //   end: [Function: end]
        // }
    } catch (error) {
        console.log("CHECK PASSWORD", error);
        process.exit(1);
    }
}
export default connectDB;