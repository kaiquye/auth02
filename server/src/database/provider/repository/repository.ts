import { IRep } from '../structure/IRepository.structure';
import { TablesDb } from '../structure/tables.enum';

export abstract class Rep<Entity> implements IRep<Entity> {
  readonly table: string;
  readonly queryBuilder;

  constructor(table: TablesDb, queryBuilder) {
    this.table = table;
    this.queryBuilder = queryBuilder;
  }

  async save(t: Entity): Promise<any> {
    return this.queryBuilder(this.table).insert(t);
  }

  async delete(id: string): Promise<Entity> {
    return this.queryBuilder(this.table).select();
  }

  async exists(t: Partial<Entity>): Promise<boolean | Entity> {
    return this.queryBuilder.select('*').from(this.table).where(t);
  }
}
