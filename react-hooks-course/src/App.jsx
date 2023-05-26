import React from 'react'
import UseStateDemo from './useState/UseStateDemo'
import UseReducerDemo from './useReducer/UseReducerDemo'
import UseEffectDemo from './useEffect/UseEffectDemo'

const App = () => {
  return (
    <div>
      <UseStateDemo />
      <UseReducerDemo />
      <UseEffectDemo />
    </div>
  )
}

export default App
