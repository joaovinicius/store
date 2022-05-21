import { TimestampsAndSoftDeletes } from '../../Base'
import { IAddress } from './IAddress'

export class Address extends TimestampsAndSoftDeletes implements IAddress {
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

  constructor (props: IAddress) {
    super(props)
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
  }
}
