import { useState } from "react";
import Content from "./components/Content";
import Task from "./components/Task";
import Header from "./components/Header";



function App() {
  const [task, setTask] = useState([]);

  function addTask(taskTitle){
     setTask([
      ...task,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
     }
     ]);
 }

  function toggleTaskCompletedById(taskId){
      const newTask = task.map(task =>{
        if(task.id === taskId){
          return{
            ...task,
            isCompleted: !task.isCompleted
          }
        }
        return task;
      });
      setTask(newTask);
     }
 function deleteTaskById(taskId){
   const newTask = task.filter(task => task.id !== taskId);
   setTask(newTask);
 }
  
  return (

    <main className=" h-screen mb-2 bg-slate-900 text-white p-5 m-0 flex justify-center items-center">

      <div className="flex w-[500px] flex-col items-center gap-5">
        <Header/>
        <Content onAddTask={addTask}/>

        <Task 
        task={task}
        onComplete={toggleTaskCompletedById}
        onDelete={deleteTaskById}
        />
        
      </div>
    </main>
  )
}

export default App