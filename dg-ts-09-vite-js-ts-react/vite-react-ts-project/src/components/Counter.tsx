import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Count is {count}</h1>

      <button
        onClick={() => setCount(prev => prev + 1)}
      >[+]</button>

      <button
        onClick={() => setCount(prev => prev - 1)}
      >[-]</button>
    </>
  )
}

export default Counter

