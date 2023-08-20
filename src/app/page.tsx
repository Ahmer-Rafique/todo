"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [todos, settodos] = useState([
    { Dishes: "Baryani", id: 1 },
    { Dishes: " chorma ", id: 2 }
  ])
  const [inputVal, setinput] = useState("");
  const [id, setid] = useState(0);
  //functions
  const delitem  = (id:any)=>{
    let newArry = todos.filter(item => item.id !== id)
      settodos([...newArry])
  }
  const additem = () => {
    let obj: any = todos.find((item) => item.id == id)
    if (obj) {
      let newArry = todos.filter(item => item.id !== obj.id)
      settodos([...newArry, { Dishes: inputVal, id: id }])
      setinput("");
      setid(0)
      return
    }


    settodos([...todos, { Dishes: inputVal, id: id }])
    setinput("");
    setid(0)
  }

  const edititem = (id: any) => {
    let obj: any = todos.find((item) => item.id == id)
    setinput(obj.Dishes);
    setid(obj.id)
  };

  

  
  return (
    <div className="max-w-4xl  mx-auto p-5 ">
      <h1 className='text-center text-[40px] underline'> Todo App</h1>
      {/*start input*/}
      <div className='flex justify-between gap-5 mt-5'>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setinput(e.target.value)}
          className='w-[50%] p-2 text-lg border-b focus:outline-green-300' placeholder='write your dishe' />
        <input
          type="number"
          value={id}
          onChange={(e: any) => setid(e.target.value)}
          className='w-[30%] p-2 text-lg border-b focus:outline-red-200' placeholder=' write id ' />
        <button
          onClick={additem}
          className='bg-blue-500 hover:bg-blue-300 text-white w-[20%]  rounded'  >  Add Dishes  </button>
      </div>
      {/* end input*/}
      <h1 className='text-center text-[40px] underline mt-5'> Favourite Dishes List </h1>
      <div className="grid grid-cols-2 gap-7 ">
        {
          todos.map((item: any, i: any) => {
            return (<div className='shadow mt-5 outline-dashed ' key={i}>
              <div className='flex justify-between p-2'>
                <span className=' shadow rounded-full h-8 w-8 text-center my-auto'>{i + 1}</span>
                <span
                  onClick={() => delitem(item.id)}
                  className=' shadow rounded-full cursor-pointer text-red-500 hover:bg-gray-400 h-8 w-8 text-center my-auto text-lg  '>x</span>
              </div>
              <div className='mt-5 p-2 text-[30px] text-gray-700'>{item.Dishes}</div>
              <div>
                <h2
                  onClick={() => edititem(item.id)}
                  className='text-right cursor-pointer mr-3 hover:text-blue-500 ' >Edit</h2>
              </div>
            </div>)
          })
        }
      </div>
    </div>
  )
}
