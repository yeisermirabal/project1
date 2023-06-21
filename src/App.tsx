import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

/*Components*/
import Header from './components/UI/Header'
import Footer from './components/UI/Footer'
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

/*Types */
import { IExpenseItem } from './global/utils/Types';

/*Styles*/
import { AppWrapper, MainContent } from './App.style';
import lightTheme from './global/LightTheme';
import darkTheme from './global/DarkTheme';
import GlobalStyles from './global/GlobalStyles';

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

const App = () => {
  const [expense, setExpense] = useState(INITIAL_EXPENSES)
  const [showForm, setShowForm] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        setCurrentTheme(storedTheme as 'light' | 'dark');
    }
  }, []);

  const submitNewExpenseHandler = (expenseData: IExpenseItem) => {
    setExpense(prevExpense => {
      return [expenseData, ...prevExpense]
    })
  }

  const clickAddButtonHandler = () => {
    setShowForm((prevState) => !prevState)
  }

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppWrapper>
        <Header toggleTheme={toggleTheme} currentTheme={currentTheme} />
        <MainContent>
          <div className='container'>
            <NewExpense onSubmitNewExpense={submitNewExpenseHandler} canShowForm={showForm} onClickAdd={clickAddButtonHandler} />
            <Expenses items={expense} onClickAdd={clickAddButtonHandler} canShowForm={showForm} />
          </div>
        </MainContent>
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
