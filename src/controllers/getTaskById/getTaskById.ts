import { Task } from "../../models/task";
import { IController, httpRequest, httpResponse } from "../protocols";
import { IGetTaskByIdRepository } from "./protocols";

export class GetTaskByIdController implements IController{
    constructor(private readonly getTaskByIdRepository: IGetTaskByIdRepository){}
    async handle(httpRequest: httpRequest<any>): Promise<httpResponse<Task>> {
        try{
            const id = httpRequest?.params?.id;
            
            if (!id) {
                return {
                   statusCode: 404,
                   body: "missing id",
                };
             }

            const task = await this.getTaskByIdRepository.getTaskById(id);
            return{
                statusCode: 200,
                body: task
            }
        }
        catch(error){
            return {
                statusCode: 500,
                body:`${error}`
            }
        }
    }
    
}