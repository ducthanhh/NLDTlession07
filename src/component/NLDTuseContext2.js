import React, { useContext } from 'react'
import { themeContext } from './NLDTuseContex'

export default function NLDTuseContext2() {
    const theme = useContext(themeContext);
  return (
    <div className={theme + 'm-3'}>
        <h2>NLDTuseContext2</h2>
        <p>
            <b>ma so 222222</b>
            <b>nguyen le duc thanh</b>
            <b>k22cnt3</b>
        </p>
        </div>
  )
}
