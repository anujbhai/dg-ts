import React, { ReactNode, useState } from 'react'

type ChildrenType = {
  children: (num: number) => ReactNode
}

const initialState = { count: 0 }

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE
}

const reducer = (state: typeof initialState, action: ReducerAction): typeof initialState => {
  switch(action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 }
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 }
    default:
      throw new Error()
  }
};

const Counter = ({ children }: ChildrenType) => {
  const [count, setCount] = useState<number>(1)

  const handleInc = () => setCount(prev => prev + 1)
  const handleDec = () => setCount(prev => prev - 1)

  return (
    <>
      <h1>{ children(count) }</h1>

      <div>
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
      </div>
    </>
  )
}

export default Counter

