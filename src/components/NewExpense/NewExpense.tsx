import React from 'react';

/*Components*/
import ExpenseForm from '../Expenses/ExpenseForm';

/*Types*/
import { ExpenseItemProps, NewExpenseProps } from '../../global/utils/Types';

/*Styles*/
import { NewExpenseContainer } from './NewExpense.style';

const NewExpense = ({onAddExpense}: NewExpenseProps) => {

  const saveExpenseDataHandler = (expenseData: ExpenseItemProps) => {
    onAddExpense({
      ...expenseData,
      id: Math.random().toString()
    });
  }

  return (
    <NewExpenseContainer>      
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />        
    </NewExpenseContainer>
  );
}

export default NewExpense;
