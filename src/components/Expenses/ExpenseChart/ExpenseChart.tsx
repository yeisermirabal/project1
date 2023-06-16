import React from 'react';

/*Components */
import Card from '../../UI/Card';
import Chart from '../../Chart';

/*Types*/
import { ExpensesListProps } from '../../../global/utils/Types';


/*Styles*/





const ExpenseChart = ({items}: ExpensesListProps) => {
  const chartDataPoints = [
    {label: 'Jan', value: 0},
    {label: 'Feb', value: 0},
    {label: 'Mar', value: 0},
    {label: 'Apr', value: 0},
    {label: 'May', value: 0},
    {label: 'Jun', value: 0},
    {label: 'Jul', value: 0},
    {label: 'Aug', value: 0},
    {label: 'Sep', value: 0},
    {label: 'Oct', value: 0},
    {label: 'Nov', value: 0},
    {label: 'Dec', value: 0},
  ]

  for(const expense of items) {    
    const expenseMonth = expense.date.getMonth()
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return (    
    <Card className='mb-4'>
      <Chart dataPoints={chartDataPoints}/>
    </Card>          
  );
}

export default ExpenseChart;
