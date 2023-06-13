import React, { ChangeEvent, FormEvent, useState } from 'react';

/*Types*/
import { ExpenseFormProps, IExpenseItemForm } from '../../../global/utils/Types';

/*Styles*/
import { ExpenseFormContainer } from './ExpenseForm.style';

const initialState = {
  title: '',
  amount: '',
  date: '',
}

const ExpenseForm = ({onSaveExpenseData}: ExpenseFormProps) => {
  const [inputControl, setInputControl] = useState<IExpenseItemForm>(initialState)

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputControl(prevState => ({ ...prevState, [name]: value }));
  }

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    
    onSaveExpenseData({
      title: inputControl.title,
      amount: parseFloat(inputControl.amount),
      date: new Date(inputControl.date),
    });

    resetFormHandler();
  }

  const resetFormHandler = () => {
    setInputControl(initialState);
  }

  return (
    <ExpenseFormContainer onSubmit={submitHandler}>
      <div className='row'>
        <div className='col-lg-4 col-sm-6 col-12'>
          <label>Title</label>
          <input 
            className='new-expense--control' 
            name='title' 
            type='text' 
            onChange={inputChangeHandler} 
            value={inputControl.title} 
          />
        </div>
        <div className='col-lg-4 col-sm-6 col-12'>
          <label>Amount</label>
          <input 
            className='new-expense--control' 
            name='amount'
            type='number' 
            min='0.01' 
            step='0.01' 
            onChange={inputChangeHandler} 
            value={inputControl.amount} 
          />
        </div>
        <div className='col-lg-4 col-sm-6 col-12'>
          <label>Date</label>
          <input 
            className='new-expense--control' 
            name='date'
            type='date' 
            min='2019-01-01' 
            max='2024-01-01' 
            onChange={inputChangeHandler} 
            value={inputControl.date} 
          />
        </div>
        <div className='col-12'>
          <button className='btn new-expense--btn' type='submit'>Add Expense</button>
        </div>
      </div>
    </ExpenseFormContainer>
  );
}

export default ExpenseForm;
