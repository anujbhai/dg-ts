import { createContext, ReactElement, useMemo, useReducer } from "react"

export type CartItemType = {
  sku: string,
  name: string,
  price: number,
  quantity: number,
}

type CartStateType = {
  cart: CartItemType[]
}

const initCartState: CartStateType = { cart: [] }

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QTY: "QTY",
  SUBMIT: "SUBMIT",
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
  type: string,
  payload?: CartItemType,
}

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) throw new Error('action payload missing in ADD action.')

      const { sku, name, price } = action.payload
      const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)
      const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku)
      const quantity: number = itemExists ? itemExists.quantity + 1 : 1

      return {
        ...state,
        cart: [...filteredCart, { sku, name, price, quantity }]
      }
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) throw new Error('action payload missing in REMOVE action.')
      
      const { sku } = action.payload
      const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

      return {
        ...state,
        cart: [...filteredCart]
      }
    }
    case REDUCER_ACTION_TYPE.QTY: {
      if (!action.payload) throw new Error('action payload missing in QTY action.')
      
      const { sku, quantity } = action.payload
      const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku)

      if (!itemExists) {
        throw new Error('Item must exist in order to update quantity.')
      }

      const updatedItem: CartItemType = {
        ...itemExists,
        quantity
      }

      const filteredCart: CartItemType[] = state.cart.filter(item => item.sku !== sku)

      return {
        ...state,
        cart: [...filteredCart, updatedItem]
      }
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
      return {
        ...state,
        cart: [],
      }
    }
    default:
      throw new Error('Unidentified reducer action type')
  }
}

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState)

  const REDUCER_ACTION = useMemo(() => {
    return REDUCER_ACTION_TYPE
  }, [])

  const total_items = state.cart.reduce((prevValue, cartItem) => {
    return prevValue + cartItem.quantity
  }, 0)

  const total_price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(
    state.cart.reduce((prevValue, cartItem) => {
      return prevValue + (cartItem.quantity * cartItem.price)
    }, 0)
  )

  // sorting
  const cart = state.cart.sort((a, b) => {
    const itemA = Number(a.sku.slice(-4))
    const itemB = Number(b.sku.slice(-4))

    return itemA - itemB
  })

  return {
    dispatch,
    REDUCER_ACTION,
    total_items,
    total_price,
    cart,
  }
}

export type UseCartContextType = ReturnType<typeof useCartContext>

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTION: REDUCER_ACTION_TYPE,
  total_items: 0,
  total_price: '',
  cart: []
}

export const CartContext = createContext<UseCartContextType>(initCartContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={ useCartContext(initCartState) }>
      { children }
    </CartContext.Provider>
  )
}

export default CartContext

