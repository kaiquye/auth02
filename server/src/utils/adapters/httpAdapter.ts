import { Response } from 'express';

export interface IHttpResponse {
  status?: number;
  json?: object | string | null;
  cookie?: { name: string; value: string };
}

export type IController = (body, params?, next?) => Promise<IHttpResponse>;

export function HttpAdapter(controller: IController, infos?: 'add-user-infos' | 'not-user-infos') {
  return async function (req, res: Response) {
    const body = req.body;
    const params = req.params;
    const cookie = req.cookie;

    try {
      if (infos === 'add-user-infos') {
        body.user_infos = req.user_infos;
        body.cookie = cookie;
      }

      const result = await controller(body, params);

      if (result.cookie?.name && result.cookie?.value) {
        res.cookie(result.cookie.name, result.cookie.value, { httpOnly: true });
      }

      return res.status(result?.status || 200).json(result?.json);
    } catch (e) {
      console.log('ERROR ADAPTER', e);
    }
  };
}
