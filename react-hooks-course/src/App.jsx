import React from 'react'
import UseStateDemo from './useState/UseStateDemo'
import UseReducerDemo from './useReducer/UseReducerDemo'
import UseEffectDemo from './useEffect/UseEffectDemo'
import UseRefDemo from './useRef/UseRefDemo'

const App = () => {
  return (
    <div>
      <UseStateDemo />
      <UseReducerDemo />
      <UseEffectDemo />
      <UseRefDemo />
    </div>
  )
}

export default App
