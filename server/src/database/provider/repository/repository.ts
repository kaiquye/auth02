import { IRep } from '../structure/IRepository.structure';
import { Knex } from 'knex';

export abstract class Rep<Entity> implements IRep<Entity> {
  private readonly table: string;
  private readonly queryBuilder: Knex;

  constructor(table: string, queryBuilder: Knex) {
    this.table = table;
    this.queryBuilder = queryBuilder;
  }

  async save(t: Entity): Promise<any> {
    return this.queryBuilder(this.table).select();
  }

  delete(t: Entity): Promise<Entity> {
    return Promise.resolve(undefined);
  }

  exists(t: Entity): Promise<boolean | Entity> {
    return Promise.resolve(undefined);
  }
}
