import {
   IcreateTaskRepository,
   CreateTaskParams,
} from "../../controllers/createTask/protocols";
import { Task } from "../../models/task";
import { Tasks } from "../sequelizeTasksRepository";

export class sequelizeCreateTaskRepository implements IcreateTaskRepository {
   async createTask(params: CreateTaskParams): Promise<Task> {
      const task = await Tasks.create({
         title: params.title,
         status: "Pendente",
      });
      
      if (!task.dataValues) {
         throw new Error("User not created");
      } else {
         return {
            id: task.dataValues.id,
            title: task.dataValues.title,
            status: task.dataValues.status,
         };
      }
   }
}
