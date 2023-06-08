import React from 'react';
import { ThemeProvider } from 'styled-components';

/*Components*/
import Header from './layout/Header'
import Footer from './layout/Footer'
import ExpenseList from './components/ExpenseList';

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
            <ExpenseList />          
          </div>          
        </MainContent>      
        <Footer />
      </AppWrapper>
    </ThemeProvider>
    
  );
}

export default App;
