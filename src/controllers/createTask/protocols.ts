import { Task } from "../../models/task";

export interface CreateTaskParams{
    title: string;
}

export interface IcreateTaskRepository {
    createTask(params: CreateTaskParams): Promise<Task>
}