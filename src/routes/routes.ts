import express from "express";
import { GetTasksController } from "../controllers/getTasks/getTasks";
import { sequelizeGetTasksRepository } from "../repositories/getTasks/sequelizeGetTasks";
import { sequelizeCreateTaskRepository } from "../repositories/createTask/sequelizeCreateTask";
import { CreateTaskController } from "../controllers/createTask/createTasks";
import { sequelizeUpdateTaskRepository } from "../repositories/updateTask/sequelizeUpdateTask";
import { UpdateTaskController } from "../controllers/updateTask/updateTask";
import { sequelizeDeleteTaskRepository } from "../repositories/deleteTask/sequelizeDeleteTask";
import { DeleteTaskController } from "../controllers/deleteTask/deleteTask";
import { GetTaskByIdController } from "../controllers/getTaskById/getTaskById";
import { sequelizeGetTaskByIdRepository } from "../repositories/getTaskById/sequelizeGetTaskById";
export const router = express.Router();

router.get("/tasks", async (req, res) => {
   const getTasksRepository = new sequelizeGetTasksRepository();
   const getTasksController = new GetTasksController(getTasksRepository);
   const { statusCode, body } = await getTasksController.handle();

   res.status(statusCode).send(body);
});

router.post("/tasks", async (req, res) => {
   const createTaskRepository = new sequelizeCreateTaskRepository();
   const createTaskController = new CreateTaskController(createTaskRepository);
   const { body, statusCode } = await createTaskController.handle(req);
   res.status(statusCode).send(body);
});

router.patch("/tasks/:id", async (req, res) => {
   const updateTaskRepository = new sequelizeUpdateTaskRepository();
   const updateTaskController = new UpdateTaskController(updateTaskRepository);
   const { body, statusCode } = await updateTaskController.handle(req);

   res.status(statusCode).send(body);
});

router.delete("/tasks/:id", async (req, res) => {
   const deleteTaskRepository = new sequelizeDeleteTaskRepository();
   const deleteTaskController = new DeleteTaskController(deleteTaskRepository);
   const { body, statusCode } = await deleteTaskController.handle(req);

   res.status(statusCode).send(body);
});

router.get("/tasks/:id", async (req, res) => {
   const getTaskByIdRepository = new sequelizeGetTaskByIdRepository();
   const getTaskByIdController = new GetTaskByIdController(getTaskByIdRepository);
   const { statusCode, body } = await getTaskByIdController.handle(req);

   res.status(statusCode).send(body);
});
