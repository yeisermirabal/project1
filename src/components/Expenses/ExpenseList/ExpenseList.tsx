import React from 'react';

/*Components */
import ExpenseItem from '../ExpenseItem';

/*Types*/
import { ExpensesListProps, IExpenseItem } from '../../../global/utils/Types';

/*Styles*/


const ExpenseList = ({items}: ExpensesListProps) => {

  if(items.length === 0) {
    return <p className='text-center'>No expenses found.</p> 
  }
  
  return (    
    <div className='row'>      
      {items.map((expense: IExpenseItem) => {
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
  );
}

export default ExpenseList;
