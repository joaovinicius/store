export interface ReadApiBody {
  responseBodyToEntity(data: unknown): unknown
}

export interface ReadApiHeaders {
  responseHeaderToEntity(data: unknown): unknown
}

export interface SendApiData {
  fromEntityToRequestData(data: unknown): unknown
}

export interface SendApiFile {
  fromFileToRequestData(data: File): unknown
}

export interface ReadSqlRecords {
  queryDataToEntity(data: unknown): unknown
}

export interface SendSqlRecords {
  fromEntityToSqlData(data: unknown): unknown
}

export interface ReadLocalStorage {
  fromObjectToEntity(data: unknown): unknown
}


