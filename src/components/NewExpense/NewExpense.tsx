import React from 'react';

/*Components*/
import ExpenseForm from '../Expenses/ExpenseForm';

/*Types*/

/*Styles*/
import { NewExpenseContainer } from './NewExpense.style';

const NewExpense = () => {
  return (
    <NewExpenseContainer>      
      <ExpenseForm />        
    </NewExpenseContainer>
  );
}

export default NewExpense;
