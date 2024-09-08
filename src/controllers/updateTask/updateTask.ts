import { Task } from "../../models/task";
import { IController, httpRequest, httpResponse } from "../protocols";
import { IUpdateTaskRepository, UpdateTaskParams } from "./protocols";

export class UpdateTaskController implements IController {
   constructor(private readonly updateTaskRepository: IUpdateTaskRepository) {}
   async handle(
      httpRequest: httpRequest<UpdateTaskParams>
   ): Promise<httpResponse<Task>> {
      try {
         const id = httpRequest?.params?.id;
         const body = httpRequest?.body;
         if (!body) {
            return {
               statusCode: 400,
               body: "missing body",
            };
         }
         if (typeof body.status !== "string" || body.status == "") {
            return {
               statusCode: 400,
               body: "Invalid request body",
            };
         }
         if (!id) {
            return {
               statusCode: 400,
               body: "missing id",
            };
         }
         const task = await this.updateTaskRepository.updateTask(id, body);
         return {
            statusCode: 200,
            body: task,
         };
      } catch (error) {
         return {
            statusCode: 500,
            body: `${error}`,
         };
      }
   }
}
