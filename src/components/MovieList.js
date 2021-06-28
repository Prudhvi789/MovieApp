import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Movie from './Movie.js'

const StyledContainer = styled.div`
        display: flex;
        margin: 1%;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        align-items: center;
    `;

const MovieList  = (props) => {
    const [ moviesData, setData ] = useState([]);
    const [ loading, setLoading ] = useState(false);
   
    const featuredUrl = "https://api.themoviedb.org/3/discover/movie?api_key=74a9f33e3ae7ed37c1398178d30d8c0f&language=en-US&sort_by=popularity.desc";
    const searchUrl = 'https://api.themoviedb.org/3/search/movie?&api_key=74a9f33e3ae7ed37c1398178d30d8c0f&query='+props.word
    
    
    const fetchData = (url) => {
        setLoading(true)
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setData(data.results)
            setLoading(false)
          })
    }
    
    useEffect(()=>{
        if(props.word){
            fetchData(searchUrl)
        }
        else{
            fetchData(featuredUrl) 
        }        
       
    },[searchUrl,props.word])

    //console.log(moviesData);
    
    return (
        <StyledContainer>
            {
              loading ? <div> Loading </div> :  
             (moviesData.length !== 0 ? moviesData.map((item)=>{
                return ( <Movie item={item} key={item.id}/> )
                }) : <div>No such movies!!</div>)
            } 
        </StyledContainer>
    )
}

export default MovieList;