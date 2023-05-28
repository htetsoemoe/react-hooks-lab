/**
 * useRef => Accessing DOM Elements
 * In React, we can add a ref attribute to an element to access it directly in the DOM.
 */

import React, { useRef, useState } from 'react';

const UseRefDemo = () => {
    const inputRef = useRef(); // useRef() only returns one item. It returns an Object called current.

    const onClickHandler = () => {
        console.log(inputRef.current.value);
        inputRef.current.value = "";
    }

    return (
        <div className="flex justify-center items-center mx-auto h-screen">
            <div className='flex flex-col gap-5 p-40 shadow-2xl border-zinc-900'>
                <h6 className='text-2xl font-semibold'>useRef Hook</h6>

                <input type="text" ref={ inputRef } placeholder='Enter Text...' />
                <button onClick={onClickHandler} className='px-5 py-1 bg-slate-800 text-white rounded'>Click Me</button>
            </div>
        </div>
    )
}

export default UseRefDemo
