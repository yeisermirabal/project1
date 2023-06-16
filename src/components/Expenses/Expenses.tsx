import React, { useState } from 'react';

/*Components */
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart/ExpenseChart';

/*Types*/
import {ExpensesProps} from '../../global/utils/Types'

/*Styles*/
import { ExpensesContainer } from './Expenses.style';



const Expenses = ({items, onClickAdd, canShowForm}: ExpensesProps) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = items.filter((expense) => expense.date.getFullYear().toString() === filteredYear)
  
  return (    
    <Card title="Expense List">
      <ExpensesContainer>
        <ExpenseFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler} 
          onClickAdd={onClickAdd} 
          canShowForm={canShowForm}
        />    
        <ExpenseChart items={filteredExpenses}/>  
        <ExpenseList items={filteredExpenses} />
      </ExpensesContainer>     
    </Card>          
  );
}

export default Expenses;
