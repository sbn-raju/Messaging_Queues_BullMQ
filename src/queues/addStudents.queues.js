import { Queue } from "bullmq";


export const addStudentQueue = new Queue('addingStudents', {
    connection:{
        host:process.env.REDIS_CLOUD_CONSOLE_HOST,
        port:process.env.REDIS_CLOUD_CONSOLE_PORT,
        password:process.env.REDIS_CLOUD_CONSOLE_PASSWORD,
    }
});