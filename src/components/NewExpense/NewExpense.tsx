import React from 'react';

/*Components*/
import ExpenseForm from '../Expenses/ExpenseForm';

/*Types*/

/*Styles*/
import { NewExpenseContainer } from './NewExpense.style';

const NewExpense = () => {
  return (
    <NewExpenseContainer>
      <div className='row'>
        <ExpenseForm /> 
      </div>             
    </NewExpenseContainer>
  );
}

export default NewExpense;
