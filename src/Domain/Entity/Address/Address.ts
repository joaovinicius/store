import { City } from '../../ValueObject/Collection/City/City'
import { IAddress } from './IAddress'

export class Address implements IAddress {
  public id?: string
  public cep: string
  public city: City
  public street: string
  public number: string
  public neighborhood: string
  public complement?: string
  public name?: string

  constructor (props: IAddress) {
    this.id = props.id
    this.cep = props.cep
    this.city = props.city
    this.street = props.street
    this.number = props.number
    this.neighborhood = props.neighborhood
    this.complement = props.complement
    this.name = props.name
  }
}
