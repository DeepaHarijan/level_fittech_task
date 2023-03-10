import React from 'react'
import './Rowsection2.css'

import { rowsection2Data } from '../Data/Data'

const Rowsection2 = () => {
  return (
    <div>
      <h4>Payment methods</h4>
      <div className="rowsection2">
        {rowsection2Data.map((item)=>{
            return(
            <div className="card">
            <div className="title">
                <p>{item.name}</p>
                <button>{item.btnText}</button>
            </div>
            <img src={item.img} alt="" />
              
        </div>
       
        
            )
        })}
        
        </div>
        
    </div>
  )
}

export default Rowsection2