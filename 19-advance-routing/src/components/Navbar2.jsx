import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate= useNavigate()
  return (
    <div className="r">
        <button className='but' onClick={()=>{
            navigate('/')
        }}>Return to home page
        </button>
        <button className='but' onClick={()=>{
            navigate(-1)
        }}>Back
        </button>
        <button className='but' onClick={()=>{
            navigate(-1)
        }}>Next
        </button>
    </div>
  )
}

export default Navbar2