import React from 'react';
import { ThemeProvider } from 'styled-components';

/*Components*/
import Header from './layout/Header'
import Footer from './layout/Footer'
import ExpenseItem from './components/ExpenseItem'

/*Types*/
import {IExpenseItem} from './global/utils/Types'

/*Styles*/
import theme from './global/Theme';
import GlobalStyles from './global/GlobalStyles';
import { AppWrapper, MainContent } from './App.style';

function App() {
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
    }
  ]
  

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AppWrapper>
        <Header />
        <MainContent>
          <div className='container'>
            {
              expenseList.map((expense: IExpenseItem) => {
                return <ExpenseItem key={expense.id} item={expense} />
              })
            }
          </div>          
        </MainContent>      
        <Footer />
      </AppWrapper>
    </ThemeProvider>
    
  );
}

export default App;
