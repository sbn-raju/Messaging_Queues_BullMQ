import { Router } from "express";
import { addStudentControllers } from "../controllers/addStudent.controllers.js";




const studentRouter = Router();


studentRouter.route("/add/student").post(addStudentControllers);


export default studentRouter