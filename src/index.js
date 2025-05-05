import connectDB from "../index2.js";  
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
    path: "./src/.env" // Corrected path to the .env file
});
connectDB().then(() => {
app.listen(process.env.PORT || 3000,()=>{
console.log(`Server is running on port ${process.env.PORT}`);
app.on("error", (err) => {
    console.error("Error starting server:", err);
})
})}).catch((error)=>{
console.log("Error connecting to MongoDB", error);

})
