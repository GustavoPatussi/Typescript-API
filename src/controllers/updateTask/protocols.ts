import { Task } from "../../models/task";

export interface UpdateTaskParams {
    status: string;
}
export interface IUpdateTaskRepository {
    updateTask(id: string, params: UpdateTaskParams): Promise<Task>
}