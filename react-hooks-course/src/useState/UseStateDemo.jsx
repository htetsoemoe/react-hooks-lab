import React, { useState } from 'react'

const UseStateDemo = () => {
    const [inputValue, setInputValue] = useState("Hey There!");
    
    const onChangeHandler = (event) => {
        let newValue = event.target.value;
        setInputValue(newValue);
    }
    return (
        <div className="flex justify-center items-center mx-auto h-screen">
            <div className='flex flex-col gap-5 p-40 shadow-2xl border-zinc-900'>
                <h6 className='text-2xl font-semibold'>useState Hook</h6>
                <input type="text" onChange={onChangeHandler} className='bg-slate-600 text-white w-96 h-10 p-5 rounded' placeholder='Enter Text...'/>
                <p className='font-semibold'>{inputValue}</p>
            </div>
        </div>    
    )
}

export default UseStateDemo
