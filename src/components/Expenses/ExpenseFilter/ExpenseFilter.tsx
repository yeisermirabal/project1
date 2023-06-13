import React, { ChangeEvent } from 'react';

/*Components */

/*Types*/
import { ExpenseFilterProps } from '../../../global/utils/Types';

/*Styles*/
import { ExpenseFilterContainer } from './ExpenseFilter.style';

const ExpenseFilter = ({selected, onChangeFilter}: ExpenseFilterProps) => {

  const dropdownChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChangeFilter(event.target.value);
  }
  
  return (    
    <ExpenseFilterContainer>
      <div className='expense-filter'>
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value='2019'>2019</option>
          <option value='2020'>2020</option>
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
        </select>
      </div>
    </ExpenseFilterContainer>      
  );
}

export default ExpenseFilter;
