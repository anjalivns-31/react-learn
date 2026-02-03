import React from 'react'
import { useContext } from 'react';
import { ThemeDataContext } from '../context/ThemeContext';

const Button = () => {
    const [theme,setTheme]=useContext(ThemeDataContext)

    const chnageTheme=()=>{
        setTheme('Dark')
    }
  return (
    <div cl>
        <button onClick={chnageTheme}>
            Chnage Theme
        </button>
    </div>
  )
}

export default Button