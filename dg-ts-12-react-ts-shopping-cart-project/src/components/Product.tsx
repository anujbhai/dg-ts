import { Dispatch, ReactElement } from "react"
import { ProductType } from "../context/ProductsProvider"
import { ReducerAction, ReducerActionType } from "../context/CartProvider"

type PropsType = {
  product: ProductType,
  dispatch: Dispatch<ReducerAction>,
  REDUCER_ACTIONS: ReducerActionType,
  inCart: boolean,


}

const Product = ({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement => {
  return (
    <div>Product</div>
  )
}

export default Product

