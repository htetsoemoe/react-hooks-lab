import React, { useReducer } from 'react'

const initialState = {
    count: 0,
    showText: true
}

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1, showText: state.showText}
        case "toggleShowText":
            return {count: state.count, showText: !state.showText}
        default:
            return state
    }
}

const UseReducerDemo = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div className="flex justify-center items-center mx-auto h-screen">
                <div className='flex flex-col gap-5 p-60 shadow-2xl border-zinc-900'>
                    <h6 className='text-2xl font-semibold'>useReducer Hook</h6>
                    <h1 className='text-2xl font-semibold text-center'>{state.count}</h1>
                    <button 
                        onClick={() => {
                            dispatch({type: "INCREMENT"}),
                            dispatch({ type: "toggleShowText"})
                        }}
                        className='px-5 py-1 bg-black text-white rounded'
                    >
                        Click Me
                    </button>

                    <div>
                        {
                            state.showText && <p className='text-center font-bold'>Hey There!</p>
                        }
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default UseReducerDemo
