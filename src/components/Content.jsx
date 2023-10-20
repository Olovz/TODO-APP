import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'

export default function Content({ onAddTask}){
  const [title, setTitle] = useState('');


function handleSubmit(event){
  event.preventDefault();
    onAddTask(title)
    setTitle('')
}

function onChageTitle(event){
  setTitle(event.target.value);
}
  return (
    <div>
         <form onSubmit={handleSubmit} className=' flex gap-2 w-[400px] p-1 rounded-md ring-1 ring-slate-600'>

            <button className=' flex-1 bg-blue-600 p-2 rounded-lg'>
             <AiOutlinePlusCircle/>
            </button>

            <input type="text" 
            value={title}
            onChange={onChageTitle}
            className=' outline-none placeholder:text-sm bg-transparent w-full'
             placeholder='Add your next task...'/>

        </form>
    </div>
  )
}

