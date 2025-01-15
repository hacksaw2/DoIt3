import { useEffect, useRef, useState } from 'react'
import './App.css'
import TodoSvg from './Svgs/TodoSvg'
import MenuIconSvg from './Svgs/MenuIconSvg'
import SearchIconSvg from './Svgs/SearchIconSvg'
import Application from './Svgs/Application'
import NightModesSvg from './Svgs/NightModesSvg'
import Arrow from './Svgs/Arrow'
import Alarm from './Svgs/Alarm'
import Calender from './Svgs/Calender'
import AllTasks from './Svgs/AllTasks'
import Important from './Svgs/Important'
import { Outlet, NavLink } from 'react-router-dom'
import SignupSvg from './Svgs/SignupSvg'



function App() {

  // const [hamburger, setHamburger] = useState(false)

  // const wChange = useRef()



  return (
    <>
      <div className='bg-[#fbfdfc]'>
        {/* Navbar */}
        <div className='flex justify-center'>
          <div className="navbar outer-box flex  h-[56px] bg-  items-center w-[90vw]">


            <div className="section1 w-[50vw] flex text-[#3f9142] "><div className="menu p-1"><MenuIconSvg /></div><div className="DoIt flex text-lg font-bold"><TodoSvg />DoIt</div></div>


            <div className="section2 w-[50vw] flex justify-end "><div className='flex'><SearchIconSvg /><button ><Application /></button><NightModesSvg /></div></div>
          </div>
        </div>

        <div className="grid  h-[90vh]  ml-[4vw] lg:ml-[5vw]  ">


        <div  >
            <div className="innerColumn  bg-[#eef6ef] w-[10vw] lg:w-[19vw] h-[80vh] lg:mt-[10vh] flex justify-center items-center">

              <div className="boxes w-[17vw] ">
                <div className="box1 bg-[#fbfdfc] flex  items-center">
                  <ul className=' '>
                  <NavLink to='/signup' className={({ isActive }) => `${isActive ? "bg-[#dbe8dd] flex text-sm h-7  gap-2 p-1 rounded-md  w-[10vw] lg:w-[17vw] mb-1" : " flex text-sm h-7  gap-2 p-1 mb-1"}`}> <li className=' flex gap-2'><SignupSvg /> <p className='hidden lg:block'>Signup</p></li></NavLink>
                    <li className='flex text-sm h-7 p-1 gap-2 mb-1 '><AllTasks /> <p className='hidden lg:block'>All Tasks</p></li>
                    <NavLink to='/today' className={({ isActive }) => `${isActive ? "bg-[#dbe8dd] flex text-sm h-7  gap-2 p-1 rounded-md w-[10vw] lg:w-[17vw] mb-1" : "flex text-sm h-7  gap-2 p-1 mb-1"}`}> <li className='flex   gap-2'><Calender /><p className='hidden lg:block'>Today</p></li></NavLink>
                    <li className='flex text-sm h-7  p-1 gap-2 mb-1'><Important /><p className='hidden lg:block'>Planned</p></li>
                  </ul>
                </div>
                <div className="box2 bg-[#fbfdfc] flex items-center"><Arrow /><p className='hidden lg:block'>Add List</p></div>
                <div className="box2 bg-[#fbfdfc]"></div>
              </div>


            </div>
          </div>


          <div className="column2 bg-[#fbfdfc] w-[80vw] md:w-[49vw] lg:w-[49vw]   "  >
            <Outlet />

          </div>

          <div className="column3  text-sm hidden md:block lg:block bg-[#eef6ef] " >
            <div className="app1 flex h-10 border-b-2 border-[#d3e0d4] items-center w-[23vw] ml-[2vw]"><Arrow /><p className='md:hidden md:w-[20vw]'>Add Step</p></div>
            <div className="app2 flex h-10  border-b-2 border-[#d3e0d4] items-center w-[23vw] ml-[2vw]"><Alarm />Set Reminder</div>
            <div className="app3 flex h-10 border-b-2 border-[#d3e0d4] items-center w-[23vw] ml-[2vw]"><Calender /> Add due Date</div>
            <div className="app4 flex h-10 border-b-2 border-[#d3e0d4] items-center w-[23vw] ml-[2vw]"></div>
          </div>


        </div>
      </div>
    </>
  )
}

export default App
// style={{ display: hamburger ? 'block' : 'none', backgroundColor: '#eef6ef' }}>