import { IAddress } from './IAddress'

export class Address implements IAddress {
  public id?: string
  public cep: string
  public neighborhood: string
  public street: string
  public number: string
  public complement?: string
  public country?: string
  public cityName: string
  public stateName: string
  public stateAbbr: string
  public createdAt: Date
  public updatedAt: Date
  public deletedAt?: Date

  constructor(props: IAddress) {
    this.id = props.id
    this.cep = props.cep
    this.neighborhood = props.neighborhood
    this.street = props.street
    this.number = props.number
    this.complement = props.complement
    this.country = props.country
    this.cityName = props.cityName
    this.stateName = props.stateName
    this.stateAbbr = props.stateAbbr
    this.createdAt = props.createdAt
    this.updatedAt = props.updatedAt
    this.deletedAt = props.deletedAt
  }
}
