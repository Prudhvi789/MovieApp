import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import TheatersIcon from '@material-ui/icons/Theaters';
import styled from 'styled-components';
import GenreFilter from './GenreFilter';

const MainName = styled.div`
  color: #ee0d0d;
  font-size: xxx-large;
  font-family: fantasy;
`;

const Header = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
align-content: center;
flex-wrap: wrap;`;

const Home = () => {
    const [searchword,setSearch] = React.useState("");
    const [options, setOptions ] = React.useState([]);
    
    const setter = (word) => {
      setSearch(word)
    }

    return(
    <div>
      <Header>
        <MainName><TheatersIcon /> MovieBox </MainName>
        <div style={{display: 'flex', alignItems : 'flex-end', marginTop : 30+'px'}}>
          <SearchBar word={searchword} setter={setter} />
          <GenreFilter setOptions={setOptions} />
        </div>
      </Header>
      <MovieList word={searchword} options={options}/>
    </div>
    )
}

export default Home;