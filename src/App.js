import './App.css';
import Food from './Component/food';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Component/Home';

function App() {
  return (
    <div className="App">
     <Router>
     <Switch>
       <Route path="/" exact  component={Food} /> 
       
       
       <Route path="/anime/:id" component={Home} />
       

     </Switch>
     </Router>
    </div>
  );
}

export default App;
