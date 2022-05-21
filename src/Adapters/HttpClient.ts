export type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'purge' | 'PURGE'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK'

export interface Response {
  data: any,
  status: number,
  headers: unknown,
  request: unknown
}

export interface Config {
  url?: string;
  method?: Method;
  baseURL?: string;
  headers?: any;
  params?: any;
}

export interface HttpClient {
  request(config: Config): Promise<Response>,
  get(url: string, config?: Config): Promise<Response>,
  delete(url: string, config?: Config): Promise<Response>,
  post(url: string, data: unknown, config?: Config): Promise<Response>,
  put(url: string, data: unknown, config?: Config): Promise<Response>,
  patch(url: string, data: unknown, config?: Config): Promise<Response>,
}
