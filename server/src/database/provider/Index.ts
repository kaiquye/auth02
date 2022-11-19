import { IProviderDatabase } from './structure/IApplicationRepositorys.structure';
import { IUserRep } from '../../modules/user/infrastructure/repository/structure/repository.structure';
import { UserRep } from '../../modules/user/infrastructure/repository/repository';

export class ProviderDatabase implements IProviderDatabase {
  user: IUserRep;

  constructor() {
    this.user = new UserRep();
  }
}
