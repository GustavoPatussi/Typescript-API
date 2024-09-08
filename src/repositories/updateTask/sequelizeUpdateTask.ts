import {
   IUpdateTaskRepository,
   UpdateTaskParams,
} from "../../controllers/updateTask/protocols";
import { Task } from "../../models/task";
import { Tasks } from "../sequelizeTasksRepository";

export class sequelizeUpdateTaskRepository implements IUpdateTaskRepository {
   async updateTask(id: string, params: UpdateTaskParams): Promise<Task> {
      const task = await Tasks.findOne({
         where: {
            id: id,
         },
      });
      const updatedTask = await task?.update({
         status: params.status,
      });
      console.log(updatedTask);
      console.log(task);
      if (!task || !updatedTask) {
         throw new Error("Task not found");
      } else {
         return {
            id: task.dataValues.id,
            title: task.dataValues.title,
            status: task.dataValues.status,
         };
      }
   }
}
