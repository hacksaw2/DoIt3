import React from 'react'
import { useState, useEffect } from 'react'
import DownArrow from './Svgs/DownArrow'
import Alarm from './Svgs/Alarm'
import Calender from './Svgs/Calender'
import DoubleArrowSvg from './Svgs/DoubleArrowSvg'



function Today() {

    // useState to handle entered task and the user
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])
    const [username, setUsername] = useState(null)
    const [login, setLogin] = useState('')


    // useeffect to save the username
    useEffect(() => {
        const savedName = sessionStorage.getItem('Username')
        console.log(savedName)
        if (savedName) {
            setUsername(savedName)
        }

    }, [])


    // To add new task
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username) {
            const updatedTasks = [...tasks, task];
            setTasks(updatedTasks);

            sessionStorage.setItem('tasks', JSON.stringify(updatedTasks))
            console.log(task)
            setTask('')
            setLogin('')
        } else {
            
            setLogin("No user logged in")
        }
    }

    useEffect(() => {
        const savedTasks = sessionStorage.getItem('tasks')
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        } else {
            setTasks([]);
        }
    }, [])

    // delete button for todos/tasks

    const handleDelete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1)

        setTasks(updatedTasks);
        sessionStorage.setItem('tasks', JSON.stringify(updatedTasks))
    }



    return (
        <div>

            <div className="part1 flex h-10 border-b-2 border-[#dfe6e0] text-[#6c7d6d]">To Do <DownArrow /></div>


            <div className="part2 p-3 h-[20vh] bg-gradient-to-t from-[#cedfcf] to-white justify-center">


                <form onSubmit={handleSubmit}>





                    <input
                        className='text-lg'
                        type='text'
                        placeholder='Add Task'
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <div className='text-[10px] text-red'>{login}</div>

                    <div className="bottomsection flex justify-around mt-[7vh]">
                        <svgs className="flex gap-4">
                            <Alarm />
                            <DoubleArrowSvg />
                            <Calender />
                        </svgs>
                        <button className='bg-[#cedfcf] p-1 rounded-lg text-[#4f8a51] shadow-sm shadow-slate-400  '>Add Task</button>
                    </div>

                </form>
                <div>




                </div>
            </div>

{/* mapping of the tasks from local storage */}
            <div className="part3 app">

                {tasks.length === 0 ? (

                    <p className='p-1'>No tasks available!</p>
                ) : (
                    tasks.map((task, index) => (
                        <div className="task h-10 border-b-2 flex items-center " key={index}>



                            <div className="section w-[30vw] text-[12px]  overflow-y-scroll ">{task}</div>
                            <div className="priorties w-[8vw] flex gap-[4px] text-[10px] ml-2">
                                <div className="high bg-green-300 p-[2px] rounded-sm">High</div>
                                <div className="medium bg-green-200 p-[2px] rounded-sm">Medium</div>
                                <div className="low bg-green-100 p-[2px] rounded-sm">Low</div>
                            </div>

                            <button onClick={() => handleDelete(index)} className='lg:ml-12 ml-20 bg-[#cedfcf] text-[#4f8a51]  shadow-sm shadow-gray-400 p-1 rounded-md text-sm lg:text-md'>Delete </button>
                        </div>
                    ))
                )}
            </div>







        </div>

    )
}

export default Today
