import React from 'react'

import { Tasks } from './Tasks'

export default function Task({task, onComplete, onDelete}) {
  const taskQuantity = task.length;
  const completedTasks =task.filter(task => task.isCompleted).length;
  return (
    
    <div className='w-[400px]'>

      <div className='flex w-full justify-between p-1 px-3 text-sm text-slate-400 rounded-md'>
        <div>
          <p className='text-blue-600'>Create Task <span className='mx-2 bg-slate-500 px-1 rounded-md  text-white'>{taskQuantity}</span></p>
        </div>
        <div className='flex items-center gap-2'>
          <p className='text-blue-600'>Completed</p>
          <p><span className='mx-2 bg-slate-500 px-1 rounded-md  text-white'>{completedTasks} of {taskQuantity}</span></p>
        </div>
      </div>  

      <div className=' flex-col w-full h-auto '>
        <div className=" gap-2 rounded-md my-1 p-2 w-full items-start"> 
          {task.map(task => (
            <Tasks key={task.id} task={task} onComplete={onComplete} onDelete={onDelete}/>
          ))}    
        </div>
     </div>

    </div>
    
      
  )
}

