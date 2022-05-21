export default interface LocalStorageClient {
  get(key: string): any,
  set(key: string, data: any): void,
  remove(key: string): void,
  clear(): void
}
