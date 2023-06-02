import React from 'react';

/*Types*/
import {ExpenseDateProps} from '../../global/utils/Types'

/*Styles*/

function ExpenseDate({date}: ExpenseDateProps) {
  const day = date.toLocaleString('en-En', {day: '2-digit'});
  const month = date.toLocaleString('en-En', {month: 'long'});
  const year = date.getFullYear();
  
  return (
    <div className='expense-date'>
        <div className='expense-date--month'>{month}</div>
        <div className='expense-date--year'>{year}</div>
        <div className='expense-date--day'>{day}</div>        
    </div>
  );
}

export default ExpenseDate;
