import { TimestampsAndSoftDeletes } from '../../Base'
import { IProduct } from '../Product/IProduct'
import { IAttributeValue } from '../AttributeValue/IAttributeValue'
import { IBuy } from '../Buy/IBuy'
import { IProductInStock } from './IProductInStock'

export class ProductInStock extends TimestampsAndSoftDeletes implements IProductInStock {
  public id: string
  public barcode: string
  public product: IProduct
  public attributeValues: IAttributeValue[]
  public salePrice: number
  public purchasePrice: number
  public quantity: number
  public buy?: IBuy

  constructor (props: IProductInStock) {
    super(props)
    this.id = props.id
    this.barcode = props.barcode
    this.product = props.product
    this.attributeValues = props.attributeValues
    this.salePrice = props.salePrice
    this.purchasePrice = props.purchasePrice
    this.quantity = props.quantity
    this.buy = props.buy
  }
}
