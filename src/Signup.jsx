import React from 'react'
import SignupSvg from './Svgs/SignupSvg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'




function Signup(){

const [username, setUsername] = useState('')
const navigate  = useNavigate()

// saving the username into the localStorage
const handleName = (e) =>{
    e.preventDefault()
    sessionStorage.setItem('Username',username)
    console.log(username)
   setUsername('')
   navigate('/today')
   

}

  return (
    <div className="container ">
    <div className="column2 bg-[#fbfdfc] w-[80vw] sm:w-[49vw]  h-[90vh]  shadow-sm shadow-gray-500 flex justify-center pt-28">
    <div className="box h-60 w-60 bg-[#eef6ef] shadow-sm shadow-gray-400">
<div className="icon flex w-60 justify-center mt-2 gap-2"><SignupSvg/>Signup</div>
<form className='  w-60  mt-10' onSubmit={handleName} >
  <div className="input flex justify-center">
    <input
    type='text'
    placeholder='Your Name'
    className='text-center '
    value={username}
    onChange={(e)=> setUsername(e.target.value)}/>
    </div>

    <div className="button ml-7 mt-10"><button className='bg-[#cedfcf] text-[#4f8a51] p-1 rounded-md'>Submit</button></div>
</form>
    </div>

  </div>
  </div>
  )
}

export default Signup
