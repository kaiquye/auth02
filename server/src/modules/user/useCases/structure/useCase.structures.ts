import { Result } from '../../../../utils/error/error.structure';

export interface ILoginUserReq {
  email: string;
  password: string;
}

export interface ILoginUserRes {
  token: string;
  access: string | [];
}

export abstract class IUseCase<IRequest, IResponse> {
  public msgInternalError = 'an internal error occurred in the user module, contact an administrator';
  public fail = Result.fail;
  public success = Result.ok;

  abstract execute(data: IRequest, params?): IResponse;
}
