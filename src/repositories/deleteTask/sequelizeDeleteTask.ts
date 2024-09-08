import { Task } from "../../models/task";
import { Tasks } from "../sequelizeTasksRepository";
import { IDeleteTaskRepository } from "../../controllers/deleteTask/protocols";

export class sequelizeDeleteTaskRepository implements IDeleteTaskRepository {
   async deleteTask(id: string): Promise<Task> {
      const task = await Tasks.findOne({
         where: {
            id: id,
         },
      });
      const deletedTask = await Tasks.destroy({
         where: {
            id: id,
         },
      });
      if (!task || !deletedTask) {
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
