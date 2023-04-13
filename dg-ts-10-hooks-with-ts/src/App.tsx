import React,
{
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react"

interface User {
  id: number,
  username: string
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if (n < 2) return n

  return fib(n - 1) + fib(n - 2)
}

const my_num: number = 37

function App() {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  useEffect(() => {
    console.log("mounted")

    console.log("Users:", users)

    return console.log("unmounting")
  }, [users])

  // useCallback memoizes a function
  const addCount = useCallback(
    (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => setCount(prevState => prevState + 1), []
  )

  // useMemo memoizes a value
  const result = useMemo<number>(() => fib(my_num), [my_num])

  return (
    <div className="App">
      <h1>{count}</h1>

      <button
        onClick={addCount}
      >Add</button>

      <h2>{result}</h2>

      <input ref={inputRef} type="text" />
    </div>
  )
}

export default App
