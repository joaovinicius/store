export interface Command {
  execute(url: string, body?: any): any
}
