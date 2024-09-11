import { addStudentQueue } from "../queues/addStudents.queues.js";
import { addStudentWorker } from "../worker/addStudents.worker.js";


export const addStudentControllers = async (req, res) => {
  //Getting the data from the Postman in the development otherwise from frontend
  const { name, email, branch, college } = req.body;

  //Consoling Data of the student and confirmating the data if getting null or undefine
  console.log(name, email, branch, college);

  //Adding the student info to the queue
  await addStudentQueue.add("addingSingleStudent", {
    student: {
      name,
      email,
      branch,
      college,
    },

  });

  //Worker is fetching the data from the queues and adding the data into the PostgreSQL database
  const response = addStudentWorker;


  //Getting Response from the Worker wheather the task is completed or not
  if(response){
    return res.status(200).json({
        success:true,
        message:"The Student is added successfully"
    })
  }
  else{
    return res.status(400).json({
        success:false,
        message:"The Student is not added successfully"
    })

  }

};
