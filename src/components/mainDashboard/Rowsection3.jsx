import { faArrowUpFromBracket, faArrowUpRightFromSquare, faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Table from '../TransactionTable/Table'
import './Rowsection3.css'

const Rowsection3 = () => {
  return (
    <div className="rowsection3">
        <div className="coln1">
            <Table/>
        </div>
        <div className="coln2">
            <div className="income-expense">
               <p>Income / Expense</p>
               <div>
                <FontAwesomeIcon className='link-icon1' icon={faArrowUpRightFromSquare}/>
                <span className='text'>
                <h3 className='head'>$22,578.00</h3>
                <p className='subtitle'>Total amount expense</p>
                </span>
               </div>

               <div>
                <FontAwesomeIcon className='link-icon2' icon={faArrowUpRightFromSquare}/>
                <span className='text'>
                  <h3 className='head'>$5,783.00</h3>
                  <p className='subtitle'>Total amount expense</p>
                  </span>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Rowsection3