
export interface SqlClient<T>{
  create(table: string, item: T): Promise<boolean>,
  update(table: string, item: T): Promise<boolean>,
  delete(table: string, item: T): Promise<boolean>,
  get(table: string, query: T): Promise<boolean>,
  getById(table: string, id: string): Promise<boolean>,
}
