import { faArrowDown, faArrowDown19, faArrowDownShortWide, faBell, faBellConcierge, faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Rowsection1.css'
import profile from '../../images/pic-1.png'
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons'
import Chart from '../../components/Chart/Chart'
import Piechart from '../../components/Chart/PieChart'

const Rowsection1 = () => {
  return (
    <div className="rowsection1">
        <div className="col1">
        <header>
            <h4>Balance</h4>
            <div className='profilesection'>
            <FontAwesomeIcon icon={faBell}/>
            <img className='profile' src={profile} alt="" />
            </div>
            
        </header>
        <div style={{ borderTop: "1px solid #bebebe", marginLeft: 30, marginRight: 50 ,paddingLeft:20,paddingRight:20}}></div>

        <div className="chartsection">
            <div className="chartTitle">
                <p>Daily balance overview</p>
                <div className="rightside">
                    <p>Spent</p>
                    <p>Referral</p>
                    
                    <button>14days<span style={{paddingLeft:20}}><FontAwesomeIcon icon={faArrowDown}/></span></button>
                </div>
            </div>

            <Chart/>
        </div>
        
        </div>

         <div className="col2">
            <p>Balance statistics</p>
            <h5>1,872</h5>
            <h6>Money spent</h6>
         <Piechart/>
         <div className="rightside">
                    <p>Spent</p>
                    <p>Referral</p>
                
                </div>
         
         </div>
        
    </div>
  )
}

export default Rowsection1