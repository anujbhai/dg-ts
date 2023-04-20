import { Dispatch, ReactElement } from "react"
import { ProductType } from "../context/ProductsProvider"
import { ReducerAction, ReducerActionType } from "../context/CartProvider"

type PropsType = {
  product: ProductType,
  dispatch: Dispatch<ReducerAction>,
  REDUCER_ACTIONS: ReducerActionType,
  inCart: boolean,


}

const Product = ({ product, dispatch, REDUCER_ACTIONS }: PropsType): ReactElement => {
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href

  console.log(img)


  return (
    <div>Product</div>
  )
}

export default Product

