import React from 'react'
import SignupSvg from './Svgs/SignupSvg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'




function Signup(){

const [username, setUsername] = useState('')
const navigate  = useNavigate()

const handleName = (e) =>{
    e.preventDefault()
    sessionStorage.setItem('Username',username)
    console.log(username)
   setUsername('')
   navigate('/today')
}

  return (
    <div className="column2 bg-[#fbfdfc] w-[49vw]  h-[90vh]  shadow-sm shadow-gray-500 flex justify-center items-center">
    <div className="box h-60 w-60 bg-[#eef6ef] shadow-sm shadow-gray-400">
<div className="icon flex w-60 justify-center mt-2 gap-2"><SignupSvg/>Signup</div>
<form className=' flex w-60 justify-center mt-10' onSubmit={handleName} >
    <input
    type='text'
    placeholder='Your Name'
    className='text-center'
    value={username}
    onChange={(e)=> setUsername(e.target.value)}/>
    <button>Submit</button>
</form>
    </div>

  </div>
  )
}

export default Signup
