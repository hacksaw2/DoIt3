import { useEffect, useState } from 'react';
import './App.css';

// Svgs 
import TodoSvg from './Svgs/TodoSvg';
import MenuIconSvg from './Svgs/MenuIconSvg';
import SearchIconSvg from './Svgs/SearchIconSvg';
import Application from './Svgs/Application';
import NightModesSvg from './Svgs/NightModesSvg';
import Arrow from './Svgs/Arrow';
import Alarm from './Svgs/Alarm';
import Calender from './Svgs/Calender';
import AllTasks from './Svgs/AllTasks';
import Important from './Svgs/Important';
import SignupSvg from './Svgs/SignupSvg';
import { Outlet, NavLink } from 'react-router-dom';


function App() {
  const [username, setUsername] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  // useEffect to retrieve the username from the sessionStorage
  useEffect(() => {
    const savedName = sessionStorage.getItem('Username');
    if (savedName) {
      setUsername(savedName);
    }
    setIsLoading(false);

  }, []);

  return (
    <div className="bg-[#fbfdfc]">
      {/* Navbar */}
      <div className="flex justify-center">
        <div className="navbar outer-box flex h-[56px] items-center w-[90vw]">
          <div className="section1 w-[50vw] flex text-[#3f9142]">
            <div className="menu p-1">
              <MenuIconSvg />
            </div>
            <div className="DoIt flex text-lg font-bold">
              <TodoSvg />
              DoIt
            </div>
          </div>
          <div className="section2 w-[50vw] flex justify-end">
            <div className="flex">
              <SearchIconSvg />
              <button>
                <Application />
              </button>
              <NightModesSvg />
            </div>
          </div>
        </div>
      </div>


      {/* Part1 -------------------*/}

      <div className="grid h-[90vh] ml-[4vw] lg:ml-[5vw]">
        <div>
          <div className="circle"></div>
          <div className="innerColumn bg-[#eef6ef] w-[10vw] lg:w-[19vw] h-[80vh] lg:mt-[10vh] flex justify-center items-center">
            <div className="boxes w-[17vw]">
              <div className="username text-center invisible lg:visible">
                {isLoading ? "Loading..." : username ? `Hi, ${username}` : "Hi, Guest"}
              </div>
              <div className="box1 bg-[#fbfdfc] flex items-center ml-2 lg:ml-0">
                <ul>
                  <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                      `${isActive
                        ? "bg-[#dbe8dd] flex text-sm h-7 gap-2 p-1 rounded-md w-[10vw] lg:w-[17vw] mb-1"
                        : "flex text-sm h-7 gap-2 p-1 mb-1"
                      }`
                    }
                  >
                    <li className="flex gap-2">
                      <SignupSvg />
                      <p className="hidden lg:block">Signup</p>
                    </li>
                  </NavLink>
                  <li className="flex text-sm h-7 p-1 gap-2 mb-1">
                    <AllTasks />
                    <p className="hidden lg:block">All Tasks</p>
                  </li>
                  <NavLink
                    to="/today"
                    className={({ isActive }) =>
                      `${isActive
                        ? "bg-[#dbe8dd] flex text-sm h-7 gap-2 p-1 rounded-md w-[10vw] lg:w-[17vw] mb-1"
                        : "flex text-sm h-7 gap-2 p-1 mb-1"
                      }`
                    }
                  >
                    <li className="flex gap-2">
                      <Calender />
                      <p className="hidden lg:block">Today</p>
                    </li>
                  </NavLink>
                  <li className="flex text-sm h-7 p-1 gap-2 mb-1">
                    <Important />
                    <p className="hidden lg:block">Planned</p>
                  </li>
                </ul>
              </div>
              <div className="box2 bg-[#fbfdfc] flex items-center ml-2 lg:ml-0">
                <Arrow />
                <p className="hidden lg:block">Add List</p>
              </div>
              <div className="box2 bg-[#fbfdfc]"></div>
            </div>
          </div>
        </div>

        {/* Part2-------------- */}


        {/* routing page */}
        <div className="column2 bg-[#fbfdfc] w-[80vw] md:w-[49vw] lg:w-[49vw]">
          <Outlet />
        </div>


        {/* Part 3------------------- */}

        <div className="column3 text-sm hidden md:block lg:block bg-[#eef6ef]">
          <div className="app1 flex h-10 border-b-2 border-[#d3e0d4] items-center w-[23vw] ml-[2vw]">
            <Arrow />
            Add Step
          </div>
          <div className="app2 flex h-10 border-b-2 border-[#d3e0d4] items-center w-[23vw] ml-[2vw]">
            <Alarm />
            Set Reminder
          </div>
          <div className="app3 flex h-10 border-b-2 border-[#d3e0d4] items-center w-[23vw] ml-[2vw]">
            <Calender />
            Add due Date
          </div>
          <div className="app4 flex h-10 border-b-2 border-[#d3e0d4] items-center w-[23vw] ml-[2vw]"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
