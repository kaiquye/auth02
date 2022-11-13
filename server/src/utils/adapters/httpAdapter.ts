import { Request, Response } from "express";

export interface IHttpResponse {
  status?: number;
  json?: object | string | null;
}

export interface IHttpRequest {
  body: object;
  params: object;
  user_infos?: {
    user_id: string | number;
    email: string;
    fist_name: string;
  };
}

export type IController = (data: IHttpRequest) => Promise<IHttpResponse>;

export function HttpAdapter(controller: IController) {
  return async function (req: Request, res: Response) {
    const httpRequest: IHttpRequest = {
      body: req.body,
      params: req.params,
    };

    try {
      const result = await controller(httpRequest);
      return res.status(result?.status || 200).json(result?.json);
    } catch (e) {
      console.log("ERROR ADAPTER", e);
    }
  };
}
