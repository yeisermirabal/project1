import React from 'react';
import { ThemeProvider } from 'styled-components';

/*Components*/
import Header from './components/UI/Header'
import Footer from './components/UI/Footer'
import ExpenseList from './components/Expenses/ExpenseList';
import NewExpense from './components/NewExpense';
import Card from './components/UI/Card';

/*Styles*/
import theme from './global/Theme';
import GlobalStyles from './global/GlobalStyles';
import { AppWrapper, MainContent } from './App.style';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <AppWrapper>
        <Header />
        <MainContent>
          <div className='container'>
            <Card title="Add new expense" className='mb-4'>
              <NewExpense /> 
            </Card> 
            <Card title="Expenses">
              <ExpenseList /> 
            </Card>                     
          </div>          
        </MainContent>      
        <Footer />
      </AppWrapper>
    </ThemeProvider>
    
  );
}

export default App;
