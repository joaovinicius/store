export interface ReadMeta {
  responseMetaToEntity(data: any): any
}

export interface ReadData {
  responseDataToEntity(data: any): any
}

export interface ReadIncluded {
  responseIncludedToEntity(data: any): any
}

export interface Write {
  fromEntityToRequestData(data: any): any
}

export interface Upload {
  fromFileToRequestData(data: File): any
}

export interface LocalStorage {
  fromObjectToEntity(data: any): any
}
