import { Request, Response } from 'express';

export interface IHttpResponse {
  status?: number;
  json?: object | string | null;
}

export interface IHttpRequest {
  body: any;
  params: any;
  user_infos?: {
    user_id: string | number;
    email: string;
    fist_name: string;
  };
}

export type IController = (body, params?, next?) => Promise<IHttpResponse>;

export function HttpAdapter(controller: IController) {
  return async function (req: Request, res: Response) {
    try {
      const result = await controller(req.body, req.params);
      return res.status(result?.status || 200).json(result?.json);
    } catch (e) {
      console.log('ERROR ADAPTER', e);
    }
  };
}
