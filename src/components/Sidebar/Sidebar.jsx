import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../../images/airnowlogo.png'
import manlaptop from '../../images/man-laptop.png'
import { SidebarDataOne } from '../Data/Data'
import { SidebarDataTwo } from '../Data/Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'





const Sidebar = () => {

    const [selected, setselected] = useState(0)


  return (
    <div className="sidebar">
        <div className="logo">
            <img src={logo} alt="" />
            <span>Airnow</span>
        </div>

        <div style={{ borderTop: "1px solid #8a8a8a", marginLeft: 20, marginRight: 20 }}></div>


        <div className="menu">
            <p>Manage</p>
            {SidebarDataOne.map((item,index)=>{
               return(
                <div className="menu-item">
                    <ul>
                        <li className={selected===index?'active':'list'}
                        key={index}
                        onClick={()=>setselected(index)}>
                        <FontAwesomeIcon className='icons' icon={item.icon}/>
                        <span>{item.heading}</span>
                        </li>
                        
                    </ul> 

                    
                </div>
               )
            })}

            <p>Support</p>

            {SidebarDataTwo.map((item,index)=>{
               return(
                <div className='menu-item'>
                    <ul>
                        <li>
                        <FontAwesomeIcon className='icons' icon={item.icon}/>
                        <span>{item.heading}</span> 
                        </li>
                    </ul>
                   
                </div>
               )
            })}

            
        </div>




        <div className="help-center">
            <h6>Help Center</h6>
            <p>Visit our help center</p>
            <button>start</button>
            <img src={manlaptop} alt="" />
        </div>
    </div>
  )
}

export default Sidebar

