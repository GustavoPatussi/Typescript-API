import { Task } from "../../models/task";
import { IController, httpResponse } from "../protocols";
import { IGetTasksRepository } from "./protocols";

export class GetTasksController implements IController {
    constructor(private readonly getTasksRepository: IGetTasksRepository) {}
    async handle(): Promise<httpResponse<Task[]>>{
        try{
            const tasks = await this.getTasksRepository.getTasks();
            return {
                statusCode: 200,
                body: tasks,
            };
        }
        catch(error){
            return {
                statusCode: 500,
                body: 'Something went wrong'
            };
        }
    }
}