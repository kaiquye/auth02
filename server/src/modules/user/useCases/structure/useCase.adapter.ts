import { Result } from '../../../../utils/error/error.structure';

export abstract class IUseCase<IRequest, IResponse> {
  public msgInternalError = 'an internal error occurred in the user module, contact an administrator';
  public fail = Result.fail;
  public success = Result.ok;

  abstract execute(data: IRequest, params?): IResponse;
}
