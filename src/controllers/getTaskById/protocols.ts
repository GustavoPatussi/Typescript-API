import { Task } from "../../models/task";

export interface IGetTaskByIdRepository{
    getTaskById(id: string): Promise<Task>;
}