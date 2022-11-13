import { IRep } from '../structure/IRepository.structure';
import { TablesDb } from '../structure/tables.enum';

export abstract class Rep<Entity> implements IRep<Entity> {
  private readonly table: string;
  private readonly queryBuilder;

  constructor(table: TablesDb, queryBuilder) {
    this.table = table;
    this.queryBuilder = queryBuilder;
  }

  async save(t: Entity): Promise<any> {
    return this.queryBuilder(this.table).insert(t);
  }

  async delete(t: Entity): Promise<Entity> {
    return this.queryBuilder(this.table).select();
  }

  async exists(t: Entity): Promise<boolean | Entity> {
    return this.queryBuilder(this.table).select();
  }
}
