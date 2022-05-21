export interface Command {
  execute(url: string, body?: unknown): unknown
}
