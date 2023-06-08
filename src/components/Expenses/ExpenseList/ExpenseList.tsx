import React from 'react';

/*Components */
import ExpenseItem from '../ExpenseItem'

/*Types*/
import {IExpenseItem} from '../../../global/utils/Types'

/*Styles*/
import { ExpenseListContainer } from './ExpenseList.style';
import Card from '../../UI/Card';

const ExpenseList = () => {
  const expenseList = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'New Desk2',
      amount: 50,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e6',
      title: 'New Desk Teste',
      amount: 45,
      date: new Date(2021, 5, 12),
    }
  ]
  
  return (    
    <ExpenseListContainer>
      <div className='row'>
        {
          expenseList.map((expense: IExpenseItem) => {
            return (
              <div className='col-lg-4 col-sm-6 col-12'>
                <Card className="mb-3">
                  <ExpenseItem key={expense.id} item={expense} />
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
