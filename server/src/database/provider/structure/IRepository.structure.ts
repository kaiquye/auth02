export interface IRep<Entity> {
  exists(t: Partial<Entity>): Promise<boolean | Entity>;
  delete(id: string): Promise<Entity>;
  save(t: Entity): Promise<Entity>;
}
