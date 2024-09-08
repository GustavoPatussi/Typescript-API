import { IGetTaskByIdRepository } from "../../controllers/getTaskById/protocols";
import { Task } from "../../models/task";
import { Tasks } from "../sequelizeTasksRepository";

export class sequelizeGetTaskByIdRepository implements IGetTaskByIdRepository {
   async getTaskById(id: string): Promise<Task> {
      const task = await Tasks.findOne({
         where: {
            id: id,
         },
      });
      console.log()
      if (!task) {
         throw new Error("Task not found");
      } else {
         return{
            id: String(task.dataValues.id),
            title: task.dataValues.title,
            status: task.dataValues.status,
         } ;
      }
   }
}
