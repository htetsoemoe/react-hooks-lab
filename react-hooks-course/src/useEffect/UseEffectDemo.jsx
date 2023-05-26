import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffectDemo = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[count].email);
            })
    }, [count]);

    const clickHandler = () => {
        setCount(count + 1);
    }

    return (
        <div className="flex justify-center items-center mx-auto h-screen">
            <div className='flex flex-col gap-5 p-40 shadow-2xl border-zinc-900'>
                <h6 className='text-2xl font-semibold'>useEffect Hook</h6>
                <p className="text-2xl font-semibold">Hello { data }</p>

                <button onClick={clickHandler}
                    className="px-5 py-1 bg-slate-800 text-white rounded">
                    Click Me
                </button>

                <p className="text-2xl text-center font-semibold">count : {count}</p>
            </div>
        </div>
    )
}

export default UseEffectDemo
