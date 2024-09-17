import Header  from './components/Header';
import './App.css';
import  Balance  from './components/Balance';
import IncomeExpense  from './components/IncomeExpenses';
import TransitionList from './components/TransitionList';
import Transaction from './components/Transaction';
function App() {
  return (
    <div>
        <Header/>
        <div class='container'>
          <Balance/>
        <IncomeExpense/>
        <TransitionList/>
        <Transaction/>
        </div>
    </div>
  );
}


export default App;
