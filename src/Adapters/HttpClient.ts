export type Method =
  | 'get'
  | 'delete'
  | 'post'
  | 'put'
  | 'patch'

export interface Response {
  data: unknown
  status: number
  headers: unknown
  request: unknown
}

export interface Config {
  url?: string
  method?: Method
  baseURL?: string
  headers?: unknown
  params?: unknown
}

export interface HttpClient {
  request(config: Config): Promise<Response>
  get(url: string, config?: Config): Promise<Response>
  delete(url: string, config?: Config): Promise<Response>
  post(url: string, data: unknown, config?: Config): Promise<Response>
  put(url: string, data: unknown, config?: Config): Promise<Response>
  patch(url: string, data: unknown, config?: Config): Promise<Response>
}
