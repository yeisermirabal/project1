import React from 'react';

/*Types*/

/*Styles*/
import { ExpenseFormContainer } from './ExpenseForm.style';

const ExpenseForm = () => {
  
  return (
    <ExpenseFormContainer>
      <div className='row'>
        <div className='col-lg-4 col-sm-6 col-12'>
          <label className='new-expense--label' htmlFor='new-expense--title'>Title</label>
          <input className='new-expense--control' id="new-expense--title" type='text' />
        </div>   
        <div className='col-lg-4 col-sm-6 col-12'>
          <label className='new-expense--label' htmlFor='new-expense--amount'>Amount</label>
          <input className='new-expense--control' id="new-expense--amount" type='number' min='0.01' step='0.01' />
        </div>  
        <div className='col-lg-4 col-sm-6 col-12'>
          <label className='new-expense--label' htmlFor='new-expense--date'>Date</label>
          <input className='new-expense--control' id="new-expense--date" type='date' min='2019-01-01' max='2024-01-01' />
        </div>  
        <div className='col-12'>
          <button className='btn new-expense--btn' type='submit'>Add Expense</button>
        </div>
      </div>        
    </ExpenseFormContainer>
  );
}

export default ExpenseForm;
