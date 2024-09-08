import { Task } from "../../models/task";
import { IController, httpRequest, httpResponse } from "../protocols";
import { IDeleteTaskRepository } from "./protocols";

export class DeleteTaskController implements IController {
   constructor(private readonly deleteTaskRepository: IDeleteTaskRepository) {}
   async handle(httpRequest: httpRequest<any>): Promise<httpResponse<Task>> {
      try {
         const id = httpRequest?.params?.id;
         if (!id) {
            return {
               statusCode: 400,
               body: "missing id",
            };
         }

         const task = await this.deleteTaskRepository.deleteTask(id)
         return {
            statusCode: 200,
            body: task
         }
      } catch (error) {
         return {
            statusCode: 400,
            body: `${error}`,
         };
      }
   }
}
