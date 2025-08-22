import { useState } from 'react'

import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <div className=' text-cyan-500  h-screen w-screen' style={{ backgroundColor: color }}>
      <h2 className= 'text-black bg-amber-200 text-center rounded-md border-amber-950 border-4'><b>BACKGROUND COLOR CHANGER</b></h2>
      <div className='   flex fixed  flex-wrap  justify-center bottom-12 inset-x-6'>
        <div className='flex flex-wrap justify-center gap-5 bg-lime-100 rounded-xl px-4  py-2 border-2 border-b-emerald-300-300'>
          <button style={{backgroundColor:"red"}} className='text-white' onClick={() => setcolor("red")}>RED</button>
          <button style={{backgroundColor:"blue"}} className='text-white' onClick={() => setcolor("blue")}>BLUE</button>
          <button style={{backgroundColor:"green"}} className='text-white' onClick={() => setcolor("green")}>GREEN</button>
          <button style={{backgroundColor:"pink"}} className='text-white' onClick={() => setcolor("pink")}>PINK</button>
          <button style={{backgroundColor:"grey"}} className='text-white' onClick={() => setcolor("grey")}>GREY</button>
          <button style={{backgroundColor:"brown"}} className='text-white' onClick={() => setcolor("brown")}>BROWN</button>
          <button style={{backgroundColor:"black"}} className='text-white' onClick={() => setcolor("black")}>BLACK</button>
        </div>
      </div>
    </div>
  )
}

export default App
