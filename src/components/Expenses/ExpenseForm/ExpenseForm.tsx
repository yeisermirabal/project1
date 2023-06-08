import React from 'react';

/*Types*/

/*Styles*/
import { ExpenseFormContainer } from './ExpenseForm.style';

const ExpenseForm = () => {
  
  return (
    <ExpenseFormContainer>
      <div className='new-expense--controls'>
        <div className='new-expense--control'>
          <label className='new-expense--label'>Title</label>
          <input type='text' />
        </div>   
        <div className='new-expense--control'>
          <label className='new-expense--label'>Amount</label>
          <input type='number' min='0.01' step='0.01' />
        </div>  
        <div className='new-expense--control'>
          <label className='new-expense--label'>Date</label>
          <input type='date' min='2019-01-01' max='2024-01-01' />
        </div>           
      </div>      
      <div className='new-expense--actions'>
        <button type='submit'>Add Expense</button>
      </div>    
    </ExpenseFormContainer>
  );
}

export default ExpenseForm;
