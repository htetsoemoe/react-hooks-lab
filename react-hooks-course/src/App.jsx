import React from 'react'
import UseStateDemo from './useState/UseStateDemo'
import UseReducerDemo from './useReducer/UseReducerDemo'
import UseEffectDemo from './useEffect/UseEffectDemo'
import UseRefDemo from './useRef/UseRefDemo'
import UseLayoutEffectDemo from './useLayoutEffect/UseLayoutEffectDemo'

const App = () => {
  return (
    <div>
      <UseStateDemo />
      <UseReducerDemo />
      <UseEffectDemo />
      <UseRefDemo />
      <UseLayoutEffectDemo />
    </div>
  )
}

export default App
