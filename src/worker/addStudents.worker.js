import { Worker } from "bullmq";
import { pool } from "../databases/postgreSQL.database.js"



export const addStudentWorker = new Worker('addingStudents', async (job) => {
    //Print the Message got from the queue
    console.log(job.data.student);

    const { name, email, branch, college } = job.data.student;
    console.log(name, email);

    //Writing the Query to add the student into the database
    const addStudentQuery =
      "INSERT INTO student (name, email, branch, college) VALUES ($1, $2, $3, $4) RETURNING *";
    const addStudentValue = [name, email, branch, college];

    //try-catch block for trying to put the data into the database table
    try {
        const addStudentResults = await pool.query(addStudentQuery, addStudentValue);
        if(addStudentResults.rowCount != 0){
            return true
        }
    } catch (error) {
        console.log(error);
        return false
    }
  },{
    connection:{
        host:process.env.REDIS_CLOUD_CONSOLE_HOST,
        port:process.env.REDIS_CLOUD_CONSOLE_PORT,
        password:process.env.REDIS_CLOUD_CONSOLE_PASSWORD,
    }
  }
);