export interface IRep<Entity> {
  exists(t: Entity): Promise<boolean | Entity>;
  delete(t: Entity): Promise<Entity>;
  save(t: Entity): Promise<Entity>;
}
