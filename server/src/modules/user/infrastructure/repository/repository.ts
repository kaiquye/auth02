import { IUserRep } from './structure/repository.structure';
import KnexConnection from '../../../../database/connection/knex.connection';
import { TablesDb } from '../../../../database/provider/structure/tables.enum';

export class UserRep extends IUserRep {
  constructor() {
    super(TablesDb.USER, KnexConnection);
  }
}
