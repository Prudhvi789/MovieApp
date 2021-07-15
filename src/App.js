import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieDetails from './components/MovieDetails';
import Home from './components/Home';

function App() {     
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/details">
            <MovieDetails />
          </Route>
        </Switch>
      </Router>           
    </div>
  );
}

export default App;
