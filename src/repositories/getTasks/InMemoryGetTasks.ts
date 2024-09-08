import { IGetTasksRepository } from "../../controllers/getTasks/protocols";
import { Task } from "../../models/task";

export class InMemoryGetTasksRepository implements IGetTasksRepository {
    async getTasks(): Promise<Task[]> {
        return[{
            id: "taskId",
            title: "taskTitle",
            status: "taskStatus",
        }]
    }
}