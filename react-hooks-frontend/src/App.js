import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import EmployeeSatisfactionPage from './components/EmployeeSatisfactionPage';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className= "container">
          <Switch>
              <Route exact path = "/" component = {EmployeeSatisfactionPage}></Route>
            </Switch>
        </div>
        
        </Router>
    </div>
  );
}

export default App;
