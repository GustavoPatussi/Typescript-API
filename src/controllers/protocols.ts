export type httpResponse<T> = {
   statusCode: number;
   body: T | string;
};
export type httpRequest<B> = {
   params?: any;
   body?: B;
};
export interface IController {
   handle(httpRequest: httpRequest<unknown>): Promise<httpResponse<unknown>>;
}
