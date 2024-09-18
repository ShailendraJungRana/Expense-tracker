import Header  from './components/Header';
import './App.css';
import  Balance  from './components/Balance';
import IncomeExpense  from './components/IncomeExpenses';
import TransitionList from './components/TransitionList';
import Transaction from './components/Transaction';
import { GlobalProvider } from './components/GlobalState';
import { GlobalContext } from './components/GlobalState';
function App() {
  return (
    <div>
        <Header/>
        <div class='container'>
          <Balance/>
        <IncomeExpense/>
        <TransitionList/>
        <Transaction/>
        {/* <GlobalProvider/> */}
        </div>
    </div>
  );
}


export default App;
