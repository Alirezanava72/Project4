const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
// register cookieParser before other routes
const cookieParser = require("cookie-parser");
const authRoute =require("./routes/auth");
const userRoute = require("./routes/users");
const newsRoute = require("./routes/news");
const commentRoute = require("./routes/comments");
const logger = require("morgan");

app.use(logger("dev"));



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
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(cors({origin:"http://localhost:5173", credentials: true})); // credentials:true is for passing on the cookies
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/news",newsRoute);
app.use("/api/comments",commentRoute);


// uploading ophotos
const storage=multer.diskStorage({
    destination:(req,file,fn)=>{
        fn(null,"images")
    },
    filename:(req,file,fn)=>{
        fn(null,req.body.img)
        
    }
})

const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    console.log(req.body)
    res.status(200).json("Image has been uploaded successfully!")
})


app.listen("8000",() => {
    connectDB();
    console.log("App is running no port 8000");
});

