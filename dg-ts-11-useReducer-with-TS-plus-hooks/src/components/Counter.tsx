import React, {
    ChangeEvent,
  ReactNode,
} from 'react'
import { useCounter, useCounterText } from '../context/CounterContext'

type ChildrenType = {
  children: (num: number) => ReactNode
}

const Counter = ({ children }: ChildrenType) => {
  const { count, handleInc, handleDec } = useCounter()
  const { text, handleTextInput } = useCounterText()

  return (
    <>
      <h1>{ children(count) }</h1>

      <div>
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
      </div>

      <input
        type="text"
        onChange={handleTextInput}
      />

      <h2>{text}</h2>
    </>
  )
}

export default Counter

