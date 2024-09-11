import pkg from "pg"
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pkg;


export const pool = new Pool({
    host:process.env.DATABASE_HOST,
    password:process.env.DATABASE_PASSWORD,
    user:process.env.DATABASE_USERNAME,
    port:process.env.DATABASE_PORT,
    database:process.env.DATABASE_NAME,
})


async function connection(){
    try {
        await pool.connect();
        console.log("Successfully connected to PostgreSQL Database");
    } catch (error) {
        console.log("Database not connected")
        console.log(error)
    }
}

export default connection
