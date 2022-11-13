import { UserRepAbstract } from './structure/repository.structure';
import KnexConnection from '../../../../database/connection/knex.connection';
import { TablesDb } from '../../../../database/provider/structure/tables.enum';

export class UserRep extends UserRepAbstract {
  constructor() {
    super(TablesDb.USER, KnexConnection);
  }
}
