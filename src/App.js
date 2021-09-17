import './App.css';
import Container from './Components/Container'
import { Route, Switch} from "react-router-dom"
import Header from './Components/Header'
import Mars from './Components/Mars'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>

      <Switch> 
        <Route path='/Mars'>
          <Mars />
        </Route>
        <Route path='/'>
          <Container />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
