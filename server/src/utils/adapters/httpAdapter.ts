import { Response } from 'express';

export interface IHttpResponse {
  status?: number;
  json?: object | string | null;
}

export type IController = (body, params?, next?) => Promise<IHttpResponse>;

export function HttpAdapter(controller: IController, infos?: 'add-user-infos' | 'not-user-infos') {
  return async function (req, res: Response) {
    try {
      if (infos === 'add-user-infos') {
        req.body.user_infos = req.user_infos;
      }

      const result = await controller(req.body, req.params);

      return res.status(result?.status || 200).json(result?.json);
    } catch (e) {
      console.log('ERROR ADAPTER', e);
    }
  };
}
