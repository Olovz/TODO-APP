import { TbTrash } from 'react-icons/tb';
import { BsFillCheckCircleFill } from 'react-icons/bs';

export function Tasks({task, onComplete, onDelete}) {
    
return(
    <div className="flex gap-3 items-center w-full bg-slate-800 rounded-md p-1 px-2 mt-2">

        <button className="ring w-[16px] h-[16px] rounded-lg" onClick={() => onComplete(task.id)}> 
                {task.isCompleted ? <BsFillCheckCircleFill/> : <div/>}
        </button >
                <div className='flex-1'>
                    <p className={task.isCompleted ? "line-through text-slate-600": ""}>{task.title}</p>
                </div>
        <div>
            <button className=' text-slate-600 justify' onClick={() => onDelete(task.id)}>
                <TbTrash/>
            </button>
        </div>

    </div>
)
}