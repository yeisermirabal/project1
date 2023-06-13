import React, { useState } from 'react';

/*Components */
import ExpenseItem from '../ExpenseItem'
import Card from '../../UI/Card';
import ExpenseFilter from '../ExpenseFilter';

/*Types*/
import {ExpenseListProps, IExpenseItem} from '../../../global/utils/Types'

/*Styles*/
import { ExpenseListContainer } from './ExpenseList.style';


const ExpenseList = ({items}: ExpenseListProps) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = items.filter((expense) => expense.date.getFullYear().toString() === filteredYear)
  
  return (    
    <ExpenseListContainer>
      <div className='row'>
        <div className='col-12'>
          <Card className='mb-4'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
          </Card>                  
        </div>
      </div>
      <div className='row'>
        {filteredExpenses.length === 0 && (
            <div className='col-12 text-center'>
              <p>No expenses found.</p>
            </div>
        )}
        {filteredExpenses && filteredExpenses.map((expense: IExpenseItem) => {
            return (
              <div className='col-lg-4 col-sm-6 col-12' key={expense.id}>               
                <ExpenseItem 
                  title={expense.title} 
                  amount={expense.amount}  
                  date={expense.date} 
                />                
              </div>
            )
          })          
        }
      </div>        
    </ExpenseListContainer>      
  );
}

export default ExpenseList;
