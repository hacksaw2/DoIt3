import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoSvg from './Svgs/TodoSvg'
import MenuIconSvg from './Svgs/MenuIconSvg'
import SearchIconSvg from './Svgs/SearchIconSvg'
import Application from './Svgs/Application'
import NightModesSvg from './Svgs/NightModesSvg'
import DownArrow from './Svgs/DownArrow'
import Arrow from './Svgs/Arrow'
import Alarm from './Svgs/Alarm'
import Calender from './Svgs/Calender'
import AllTasks from './Svgs/AllTasks'
import Important from './Svgs/Important'



function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  

  const handleSubmit = (e)=>{
    e.preventDefault();
    const updatedTasks = [...tasks,task];
    setTasks(updatedTasks);
  
    localStorage.setItem('tasks',JSON.stringify(updatedTasks))
    console.log(task)
    setTask('')
  }
  
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')  
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      setTasks([]); 
    }
    }, [])

    const handleDelete = (index)=>{
      const updatedTasks = [...tasks];
      updatedTasks.splice(index,1)

      setTasks(updatedTasks);
      localStorage.setItem('tasks',JSON.stringify(updatedTasks))
    }
    

  

  return (
    <>
    <div className='bg-[#fbfdfc]'>
    {/* Navbar */}
    <div  className='flex justify-center'>
      <div className="navbar outer-box flex  h-[56px] bg-  items-center w-[90vw]">


        <div className="section1 w-[50vw] flex text-[#3f9142] "><div className="menu p-1"><MenuIconSvg/></div><div className="DoIt flex text-lg font-bold"><TodoSvg/>DoIt</div></div>


        <div className="section2 w-[50vw] flex justify-end "><div className='flex'><SearchIconSvg/><Application/><NightModesSvg/></div></div>
      </div>
      </div>

<div className="grid  h-[90vh] ml-[5vw]  ">


  <div className="column1   bg-[#fbfdfc]">
<div className="innerColumn bg-[#eef6ef] w-[19vw] h-[80vh] mt-[10vh] flex justify-center items-center">

  <div className="boxes w-[15vw] ">
<div className="box1 bg-[#fbfdfc] flex  items-center">
  <ul className='p-2 '>
    <li className='flex text-sm h-8  gap-2'><AllTasks/> All Tasks</li>
    <li className='flex text-sm h-8 gap-2'><Calender/>Today</li>
    <li className='flex text-sm h-8 gap-2'><Important/>Planned</li>
  </ul>
</div>
<div className="box2 bg-[#fbfdfc] flex items-center"><Arrow/>Add List</div>
<div className="box2 bg-[#fbfdfc]"></div>
</div>


</div>
  </div>





  <div className="column2 bg-[#fbfdfc] w-[49vw]">
    <div className="part1 flex h-10 border-b-2 border-[#dfe6e0] text-[#6c7d6d]">To Do <DownArrow/></div>


    <div className="part2 p-3 h-[20vh] bg-gradient-to-t from-[#cedfcf] to-white justify-center">
      
      <form onSubmit={handleSubmit}>
      
      
      
      
      
      <input
      className='text-lg'
      type='text'
      placeholder='Add Task'
      value={task}
      onChange={(e)=>setTask(e.target.value)}
      />
      
      <div className="bottomsection flex justify-around mt-[9vh]">
        <svgs className="flex gap-4">
        <Alarm/>
        <Calender/>
        </svgs>
      <button className='bg-[#cedfcf] p-1 rounded-lg text-[#4f8a51] shadow-sm shadow-slate-400 '>Add Task</button>
      </div>

      </form>
      <div>

       


        </div>
        </div>


      <div className="part3 app">
            {tasks.length === 0 ? (
              <p>No tasks available!</p>
            ) : (
              tasks.map((task, index) => (
                <div className="task h-10 border-b-2 flex items-center " key={index}>
                  <div className="section w-[40vw]">{task}</div>
                  <button onClick={()=> handleDelete(index)} className='ml-10  bg-red-400 p-1 rounded-md'>Delete </button>
                </div>
              ))
            )}
          </div>







</div>

<div className="column3 bg-[#eef6ef] text-sm ">
  <div className="app1 flex h-10 border-b-2 border-[#d3e0d4] items-center w-[23vw] ml-[2vw]"><Arrow/> Add Step</div>
     <div className="app2 flex h-10  border-b-2 border-[#d3e0d4] items-center w-[23vw] ml-[2vw]"><Alarm/>Set Reminder</div>
     <div className="app3 flex h-10 border-b-2 border-[#d3e0d4] items-center w-[23vw] ml-[2vw]"><Calender/> Add due Date</div>
     <div className="app4 flex h-10 border-b-2 border-[#d3e0d4] items-center w-[23vw] ml-[2vw]"></div>
  </div>
  
      
      </div>
      </div>
    </>
  )
}

export default App
