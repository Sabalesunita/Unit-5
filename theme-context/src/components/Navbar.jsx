// import { useState } from 'react';
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { themeTemplate } from '../styles/style'
import {Div} from './Div';
import "../styles/navstyle.css"


export const Navbar=()=>{

    const {theme, handlechange}= useContext(ThemeContext);

    const onToggle=(e)=>{
        if(e.target.checked){
           handlechange("dark")
        }
        else
        {
           handlechange("light")
        }
    }
    return (
        <Div theme={theme ==="dark"?themeTemplate.darknav:themeTemplate.lightnav} className='navbar'>
        <h1>My Dashoard</h1>
        <div className='toggle'>
            <p>Dark Mode</p>
            <input onChange={onToggle} type="checkbox"></input>
        </div>
        </Div>
    )
}