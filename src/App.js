import { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import TheatersIcon from '@material-ui/icons/Theaters';
import styled from 'styled-components';

const Header = styled.div`
  color: #ee0d0d;
  font-size: xxx-large;
  font-family: fantasy;
`;


function App() {
    const [searchword,setSearch] = useState("");
    
    const setter = (word) => {
      setSearch(word)
    }
         
  return (
    <div className="App">
      <Header><TheatersIcon /> MovieBox </Header>
      <SearchBar word={searchword} setter={setter} />
      <Router>
        <Switch>
          <Route path="/" exact>
            <MovieList word={searchword}/>
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
