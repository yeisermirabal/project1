import React from 'react';

/*Components*/
import ExpenseDate from '../ExpenseDate';
import { usdFormatter } from '../../../global/utils/Helpers';

/*Types*/
import {ExpenseItemProps} from '../../../global/utils/Types'

/*Styles*/
import { ExpenseItemContainer } from './ExpenseItem.style';

const ExpenseItem = ({item} : ExpenseItemProps) => {
  return (
    <ExpenseItemContainer>
      <ExpenseDate date={item.date} />
      <div className='expense-item--content'>
        <div className='expense-item--amount'>{usdFormatter.format(item.amount)}</div>
        <div className='expense-item--title'>{item.title}</div>       
      </div>      
    </ExpenseItemContainer>
  );
}

export default ExpenseItem;
