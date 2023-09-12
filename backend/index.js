const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// register cookieParser before other routes
const cookieParser = require("cookie-parser");
const authRoute =require("./routes/auth");
const userRoute = require("./routes/users");
const newsRoute = require("./routes/news");
const commentRoute = require("./routes/comments");


// Database connection
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Database is connected successfully!")

    }
    catch(err){
        console.log(err)
    }
};

// Middlewares
dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/news",newsRoute);
app.use("/api/comments",commentRoute);

app.listen("8000",() => {
    connectDB();
    console.log("App is running no port 8000");
});

