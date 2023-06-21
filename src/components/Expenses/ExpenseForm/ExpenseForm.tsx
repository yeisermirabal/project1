import React, { ChangeEvent, FormEvent, useState } from 'react';

/*Types*/
import { ExpenseFormProps, IExpenseItemForm } from '../../../global/utils/Types';

/*Styles*/
import { ExpenseFormContainer } from './ExpenseForm.style';

const INITIAL_STATE = {
  title: '',
  amount: '',
  date: '',
}

const ExpenseForm = ({onSaveExpenseData, onClickAdd}: ExpenseFormProps) => {
  const [inputControl, setInputControl] = useState<IExpenseItemForm>(INITIAL_STATE)
  const [isValid, setIsValid] = useState(true);

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputControl(prevState => ({ ...prevState, [name]: value }));
  }

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if(inputControl.title.trim() === '') {
      setIsValid(false);
      return;
    }

    onSaveExpenseData({
      title: inputControl.title,
      amount: parseFloat(inputControl.amount),
      date: new Date(inputControl.date),
    });

    resetFormHandler();
    onClickAdd();
  }

  const resetFormHandler = () => {
    setInputControl(INITIAL_STATE);
  }

  return (
    <ExpenseFormContainer onSubmit={submitHandler}>
      <div className='row'>
        <div className='col-lg-4 col-sm-6 col-12'>
          <label>Title</label>
          <input 
            className={`${!isValid && 'error-input'}`} 
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
          <button className='btn primary new-expense--btn mr-3' type='submit'>Save</button>
          <button className='btn secondary' type='button' onClick={onClickAdd}>Cancel</button>
        </div>
      </div>
    </ExpenseFormContainer>
  );
}

export default ExpenseForm;
