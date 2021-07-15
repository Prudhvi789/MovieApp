import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import TheatersIcon from '@material-ui/icons/Theaters';
import styled from 'styled-components';

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
    
    const setter = (word) => {
      setSearch(word)
    }
    return(
    <div>
      <Header>
        <MainName><TheatersIcon /> MovieBox </MainName>
        <SearchBar word={searchword} setter={setter} />
      </Header>
      <MovieList word={searchword}/>
    </div>
    )
}

export default Home;