import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const CardHeader = styled.div`
  display : none;
`;

const ListCard = styled.div`
    width : 250px;
    height : 350px;
    margin : 20px;
    background-image : url(${(props) => ('https://image.tmdb.org/t/p/original'+props.imageId)});
    background-repeat: round;
    border-radius: 20px 20px 0 0;
    display: flex;
    align-items: flex-end;

    &:hover{
    ${CardHeader}{    
        display : block;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0.05) 80%, rgba(0, 0, 0, 0.05) 85%);
        height: 40%;
        width: inherit;
        color: beige;
        }
    }
`;    


const Movie = (props) => {
    const history = useHistory();
    const [ genres, setGenres ] = useState([]);
    const genreUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=74a9f33e3ae7ed37c1398178d30d8c0f&language=en-US';

    useEffect(()=>{
        fetch(genreUrl,setGenres)
        .then(response => response.json())
        .then(data => setGenres(data.genres))
    },[])

    let genreList = props.item.genre_ids.map((item)=>genres.filter((ele)=>(ele.id === item)));
    
    return (
        <ListCard imageId={props.item.poster_path} onClick={() => history.push({ pathname : '/details/'+props.item.id, state : {item : props.item,genre : genreList} })}>
            <CardHeader > 
                <p>{props.item.original_title}</p>
                <p>{props.item.vote_average ? props.item.vote_average : '?' }</p>
            </CardHeader>
        </ListCard>
    )
}

export default Movie;