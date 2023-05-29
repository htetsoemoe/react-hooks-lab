import React, { useEffect, useLayoutEffect, useRef } from 'react'

const UseLayoutEffectDemo = () => {
  const inputRef = useRef(null)

  // this works the same way as componentDidMount and componentDidUpdate.
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    console.log(inputRef.current.value) // In 'componentDidMount' stage will print "The Mandalorian" and in 'componentDidUpdate' stage will print "Grogu"
  }, [])

  useEffect(() => { // After 'componentDidMount' stage 'useEffect' will work
    inputRef.current.value = "Grogu"
  }, [])

  return (
    <div className="flex justify-center items-center mx-auto h-screen">
      <div className='flex flex-col gap-5 p-40 shadow-2xl border-zinc-900'>
        <h6 className='text-2xl font-semibold'>useLayoutEffect Hook</h6>

        <input type="text" ref={inputRef} value="The Mandalorian"  style={{width:200, padding: 10, border: 2, borderColor: 'black'}}/>
      </div>
    </div>
  )
}

export default UseLayoutEffectDemo
