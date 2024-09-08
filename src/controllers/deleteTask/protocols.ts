import { Task } from "../../models/task";

export interface IDeleteTaskRepository {
    deleteTask(id: string): Promise<Task>;
}
