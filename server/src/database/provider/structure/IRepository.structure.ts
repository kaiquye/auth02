export interface IRep<Entity> {
  table: string;
  queryBuilder;
  exists(t: Partial<Entity>): Promise<boolean | Entity>;
  delete(id: string): Promise<Entity>;
  save(t: Entity): Promise<Entity>;
}
