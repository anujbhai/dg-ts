import {
  ChangeEvent,
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useReducer
} from "react"

type StateType = {
  count: number
  text: string
}

export const initialState: StateType = { count: 0, text: '' }

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE,
  payload?: string,
}

const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch(action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 }
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 }
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? '' } // null coalesing
    default:
      throw new Error()
  }
};

const useCounterContext =  (initialState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleInc = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }), [])
  const handleDec = useCallback(() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }), [])
  const handleTextInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value,
    })
  }, [])

  return {
    state,
    handleInc,
    handleDec,
    handleTextInput,
  }
}

type UseCounterContextType = ReturnType<typeof useCounterContext> // return type utility

const initContextState: UseCounterContextType = {
  state: initialState,
  handleInc: () => { },
  handleDec: () => { },
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => { },
}

export const CounterContext = createContext<UseCounterContextType>(initContextState)

type ChildrenType = {
  children?: ReactElement | undefined
}

export const CounterProvider = ({ children, ...initialState }: ChildrenType & StateType): ReactElement => {
  return (
    <CounterContext.Provider value={ useCounterContext(initialState) }>
      { children }
    </CounterContext.Provider>
  )
}

type UseCounterHookType = {
  count: number,
  handleInc: () => void,
  handleDec: () => void,
}

export const useCounter = (): UseCounterHookType => {
  const { state: { count }, handleInc, handleDec } = useContext(CounterContext)

  return {
    count,
    handleInc,
    handleDec,
  }
}

type UseCounterTextHooktype = {
  text: string,
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const useCounterText = (): UseCounterTextHooktype => {
  const { state: { text }, handleTextInput } = useContext(CounterContext)

  return {
    text,
    handleTextInput
  }
}

