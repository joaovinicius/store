export interface Response {
  data: any,
  status: number,
  headers: unknown,
  request: unknown
}

export interface HttpClient {
  request(config: unknown): Promise<Response>,
  get(url: string, config?: unknown): Promise<Response>,
  delete(url: string, config?: unknown): Promise<Response>,
  post(url: string, data: unknown, config?: unknown): Promise<Response>,
  put(url: string, data: unknown, config?: unknown): Promise<Response>,
  patch(url: string, data: unknown, config?: unknown): Promise<Response>,
}
