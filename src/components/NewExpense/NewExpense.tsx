import React from 'react';

/*Components*/
import ExpenseForm from '../Expenses/ExpenseForm';

/*Types*/
import { ExpenseItemProps, NewExpenseProps } from '../../global/utils/Types';

/*Styles*/
import { NewExpenseContainer } from './NewExpense.style';
import Card from '../UI/Card';

const NewExpense = ({onSubmitNewExpense, canShowForm, onClickAdd}: NewExpenseProps) => {

  const saveExpenseDataHandler = (expenseData: ExpenseItemProps) => {
    onSubmitNewExpense({
      ...expenseData,
      id: Math.random().toString()
    });
  }

  return (
    <>
      {
        canShowForm && 
        <Card title="Add New Expense" className='mb-4'>
          <NewExpenseContainer>      
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClickAdd={onClickAdd} />        
          </NewExpenseContainer>
        </Card>
      }
    </>
  );
}

export default NewExpense;
