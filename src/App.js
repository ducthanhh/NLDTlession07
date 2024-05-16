import React from 'react'
import NLDTuseState from './component/NLDTuseState'
import NLDTuseEffect from './component/NLDTuseEffect'
import NLDTuseContex from './component/NLDTuseContex'
import './App.css'
export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>nguyen le duc thanh - hook</h1>
      <hr/>
      <NLDTuseState /> 
      <hr/>
      <NLDTuseEffect />
      <hr/>
      <NLDTuseContex />
    </div>
  )
}
