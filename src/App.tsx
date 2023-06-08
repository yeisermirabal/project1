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
            <Card title="This is a header">
              <NewExpense /> 
            </Card> 
            <Card title="This is a header">
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
