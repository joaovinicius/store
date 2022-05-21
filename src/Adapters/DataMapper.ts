export interface ReadApiData {
  responseDataToEntity(data: any): any
}

export interface ReadApiHeaders {
  responseHeaderToEntity(data: any): any
}

export interface SendApiData {
  fromEntityToRequestData(data: any): any
}

export interface ReadSqlData {
  queryDataToEntity(data: any): any
}

export interface SendSqlData {
  fromEntityToSqlData(data: any): any
}

export interface ReadLocalStorage {
  fromObjectToEntity(data: any): any
}

export interface SendApiFile {
  fromFileToRequestData(data: File): any
}
