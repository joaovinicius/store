export interface ReadApiData {
  responseDataToEntity(data: unknown): unknown
}

export interface ReadApiHeaders {
  responseHeaderToEntity(data: unknown): unknown
}

export interface SendApiData {
  fromEntityToRequestData(data: unknown): unknown
}

export interface ReadSqlData {
  queryDataToEntity(data: unknown): unknown
}

export interface SendSqlData {
  fromEntityToSqlData(data: unknown): unknown
}

export interface ReadLocalStorage {
  fromObjectToEntity(data: unknown): unknown
}

export interface SendApiFile {
  fromFileToRequestData(data: File): unknown
}
