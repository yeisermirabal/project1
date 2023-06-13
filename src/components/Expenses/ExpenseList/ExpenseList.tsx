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
    console.log(selectedYear)
    setFilteredYear(selectedYear);
  }
  
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
        {
          items.map((expense: IExpenseItem) => {
            return (
              <div className='col-lg-4 col-sm-6 col-12' key={expense.id}>
                <Card>
                  <ExpenseItem item={expense} />
                </Card>                  
              </div>
            )
          })
        }
      </div>        
    </ExpenseListContainer>      
  );
}

export default ExpenseList;
