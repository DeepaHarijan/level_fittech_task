import React from 'react'
import './Table.css'
import logo1 from '../../images/logo-circle1.png'
import { transactionData } from '../Data/Data'

const Table = () => {
  return (
    <div className="table-section">
        <div className="t-header">
            <h5>Transactions</h5>
            <div className="day">
                <p style={{color:'gray'}}>Today</p>
                <p style={{color:'gray'}}>This Week</p>
                <p >This Month</p>
            </div>
        </div>




<table>
  <tr>
    <th>Date and time</th>
    <th className='image-cell'>Payment method</th>
  <th>Status</th>
  <th>Amount($)</th>
  </tr>

  {transactionData.map((item)=>{
    return(
        <tr className='table-cell'>
        <td>{item.date}</td>
        <td className='image-cell'><img src={item.img}  alt="" /><p>{item.paymentMethod}</p></td>
        <td>{item.status}</td>
        <td>{item.amount}</td>
      </tr>
    )
  })}
  
  
</table>
    </div>
  )
}

export default Table