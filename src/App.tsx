import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

/*Components*/
import Header from './components/UI/Header'
import Footer from './components/UI/Footer'
import ExpenseList from './components/Expenses/ExpenseList';
import NewExpense from './components/NewExpense';
import Card from './components/UI/Card';

/*Types */
import { IExpenseItem } from './global/utils/Types';

/*Styles*/
import theme from './global/Theme';
import GlobalStyles from './global/GlobalStyles';
import { AppWrapper, MainContent } from './App.style';

const INITIAL_EXPENSES = [
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
    date: new Date(2022, 2, 28),
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
    date: new Date(2023, 5, 12),
  },
  {
    id: 'e6',
    title: 'New Desk Teste',
    amount: 45,
    date: new Date(2022, 5, 12),
  }
]

function App() {
  const [expense, setExpense] = useState(INITIAL_EXPENSES)

  const addExpenseHandler = (expenseData: IExpenseItem) => {
    setExpense(prevExpense => {
      return [expenseData, ...prevExpense]
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AppWrapper>
        <Header />
        <MainContent>
          <div className='container'>
            <Card title="Add New Expense" className='mb-4'>
              <NewExpense onAddExpense={addExpenseHandler} /> 
            </Card> 
            <Card title="Expense List">
              <ExpenseList items={expense} /> 
            </Card>                     
          </div>          
        </MainContent>      
        <Footer />
      </AppWrapper>
    </ThemeProvider>
    
  );
}

export default App;
