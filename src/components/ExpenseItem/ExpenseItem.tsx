import React from 'react';

/*Components*/
import ExpenseDate from '../ExpenseDate';

/*Types*/
import {ExpenseItemProps} from '../../global/utils/Types'


/*Styles*/

function ExpenseItem({item} : ExpenseItemProps) {
  return (
    <div className="expense-item">
      <ExpenseDate date={item.date} />
      <div className='expense-item--title'>{item.title}</div>        
      <div className='expense-item--amount'>{item.amount}</div>
    </div>
  );
}

export default ExpenseItem;
