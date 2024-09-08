import { IGetTasksRepository } from "../../controllers/getTasks/protocols";
import { Task } from "../../models/task";
import { Tasks } from "../sequelizeTasksRepository";

export class sequelizeGetTasksRepository implements IGetTasksRepository {
   async getTasks(): Promise<Task[]> {
      const allTasks = await Tasks.findAll();
      const tasks = allTasks.map((task) => ({
         id: task.dataValues.id,
         title: task.dataValues.title,
         status: task.dataValues.status,
      }));
      return tasks;
   }
}
