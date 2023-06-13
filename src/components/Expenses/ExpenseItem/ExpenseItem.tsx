import React from 'react';

/*Components*/
import ExpenseDate from '../ExpenseDate';
import { usdFormatter } from '../../../global/utils/Helpers';
import Card from '../../UI/Card';

/*Types*/
import {ExpenseItemProps} from '../../../global/utils/Types'

/*Styles*/
import { ExpenseItemContainer } from './ExpenseItem.style';

const ExpenseItem = ({title, amount, date} : ExpenseItemProps) => {
  return (
    <Card>
      <ExpenseItemContainer>
        <ExpenseDate date={date} />
        <div className='expense-item--content'>
          <div className='expense-item--amount'>{usdFormatter.format(amount)}</div>
          <div className='expense-item--title'>{title}</div>       
        </div>      
      </ExpenseItemContainer>
    </Card>  
  );
}

export default ExpenseItem;
