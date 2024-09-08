import { Task } from "../../models/task";
import { httpResponse, httpRequest, IController } from "../protocols";
import { CreateTaskParams, IcreateTaskRepository } from "./protocols";

export class CreateTaskController implements IController {
   constructor(private readonly createTaskRepository: IcreateTaskRepository) {}
   async handle(httpRequest: httpRequest<CreateTaskParams>): Promise<httpResponse<Task>> {
      try {
         const body = httpRequest.body;
         if (!body) {
            return {
               statusCode: 400,
               body: "missing body",
            };
         }

         if (typeof body.title != "string" || body.title == "") {
            return {
               statusCode: 400,
               body: "Invalid request body",
            };
         }

         const task = await this.createTaskRepository.createTask(body);
         return {
            statusCode: 201,
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
