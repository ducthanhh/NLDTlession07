import React, { createContext, useContext, useState } from 'react'
import NLDTuseContext1 from './NLDTuseContext1';
export const themeContext = createContext();// tao ngu canh de chia se


export default function NLDTuseContex() {
    // state 
    const[theme,setTheme] = useState('red');
    // ham thay dooi theme
    const nldtHandleChange = (toggle)=>{
        setTheme(theme=== 'red'?'blue':'red');
    }
  return (
    <themeContext.Provider value={theme}>
    <div className='alert'>
        <h2> Demo useContext</h2>
        <NLDTuseContext1 />
        <button onclick={nldtHandleChange}>change bgcolor</button>
    </div>
    </themeContext.Provider>
  )
}
