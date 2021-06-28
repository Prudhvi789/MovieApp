import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const DetailBox = styled.div`{
    color: aliceblue;
    padding: 70px;
}`;

const MovieDetails = () => {
    const location = useLocation();
    //console.log('history----',location.state);
    const movie = location.state.item;
    const genre = location.state.genre;
    return(
        <DetailBox>
            <img src={'https://image.tmdb.org/t/p/original'+ movie.poster_path} alt="" width="200px" />
            <p style={{textAlign : 'start'}}>{movie.title}</p>
            <div style={{display : 'flex'}}>
            {genre.map((ele)=>{
                return(<p key={ele[0].id}>{ele[0].name} ,</p>)
            })}
            </div>
            <p style={{textAlign : 'end'}}>{movie.vote_average}</p>
            <p style={{textAlign : 'end'}}>{movie.vote_count}</p>
            <p>{movie.overview}</p>
        </DetailBox>
    )
}

export default MovieDetails;