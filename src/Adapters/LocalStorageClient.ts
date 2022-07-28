export interface LocalStorageClient {
  get(key: string): unknown
  set(key: string, data: unknown): void
  remove(key: string): void
  clear(): void
}
