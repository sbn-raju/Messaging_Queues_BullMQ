import {createClient} from "redis"
import dotenv from "dotenv"
dotenv.config();


export const redisClient = await createClient({
    password:process.env.REDIS_CLOUD_CONSOLE_PASSWORD,
    socket:{
        host:process.env.REDIS_CLOUD_CONSOLE_HOST,
        port:process.env.REDIS_CLOUD_CONSOLE_PORT
    }

})