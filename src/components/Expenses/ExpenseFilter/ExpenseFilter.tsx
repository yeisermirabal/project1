import React, { ChangeEvent } from 'react';

/*Components */
import Card from '../../UI/Card';

/*Types*/
import { ExpenseFilterProps } from '../../../global/utils/Types';

/*Styles*/
import { ExpenseFilterContainer } from './ExpenseFilter.style';


const ExpenseFilter = ({selected, onChangeFilter, onClickAdd, canShowForm}: ExpenseFilterProps) => {

  const dropdownChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChangeFilter(event.target.value);
  }
  
  return (    
    <ExpenseFilterContainer>
      <div className='row'>
        <div className='col-12'>
          <Card className='mb-4'>
            <div className='expense-filter'>
              <label>Filter by year</label>
              <div className='expense-filter--actions'>
                <button type="button" className='btn primary' disabled={canShowForm} onClick={onClickAdd}>Add Expense</button>
                <select value={selected} onChange={dropdownChangeHandler}>
                  <option value='2019'>2019</option>
                  <option value='2020'>2020</option>
                  <option value='2021'>2021</option>
                  <option value='2022'>2022</option>
                  <option value='2023'>2023</option>
                </select>
              </div>              
            </div>
          </Card>                  
        </div>
      </div>
      
    </ExpenseFilterContainer>      
  );
}

export default ExpenseFilter;
