import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard.js'

const StyledContainer = styled.div` 
    margin: 3% 10%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 20px;

    @media(max-width: 768px) {
        margin: 3% 0%;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 1rem;
      }
    @media(max-width: 430px) {
        margin: 3% 1%;
        grid-gap: 0.5rem;
        grid-template-columns: repeat(3,1fr);
      }  

    @media(min-width:1450px){
        margin : 3% 22%;
    }  
    `;

const MovieList  = (props) => {
    const [ moviesData, setData ] = useState([]);
    const [ loading, setLoading ] = useState(false);
   
    const featuredUrl = "https://api.themoviedb.org/3/discover/movie?api_key=74a9f33e3ae7ed37c1398178d30d8c0f&language=en-US&sort_by=popularity.desc";
    const searchUrl = 'https://api.themoviedb.org/3/search/movie?&api_key=74a9f33e3ae7ed37c1398178d30d8c0f&query='+props.word
    
    //console.log(props.options)
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
             (props.options.length !== 0 ? props.options.map((item)=>{
                return ( <MovieCard item={item} key={item.id}/> )
                })  :  moviesData.length !== 0 ? moviesData.map((item)=>{
                        return ( <MovieCard item={item} key={item.id}/> )
                            }) : <div>No such movies!!</div>)
            } 
        </StyledContainer>
    )
}

export default MovieList;
