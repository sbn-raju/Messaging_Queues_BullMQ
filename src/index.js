import express, {urlencoded} from "express";
import dotenv from "dotenv";
import connection from "./databases/postgreSQL.database.js";
import { redisClient } from "./databases/redis.database.js"
import studentRouter from "./routes/addStudent.routes.js";
dotenv.config();




const app = express();


const port = process.env.PORT;


//Connecting Both Databases
connection();
redisClient.on('connect', ()=>{
    console.log("Successfully connected to Redis Database")
}).connect();


app.use(express.json());
app.use(urlencoded({extended:true}));


app.use("/api/v1/college", studentRouter);


app.listen(port,()=>{
    console.log(`App is listening at port: ${port}`);
})