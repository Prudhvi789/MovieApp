import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const CardHeader = styled.div`
  display : none;
`;

const fade = keyframes`
    from{
        opacity: 0;
        transform: translateY(30px);
    }

    to{
        opacity: 1;
        transform: translateY(0);
    }
`;

const dummy = 'https://lh3.googleusercontent.com/proxy/MkkGWewT4CcqkWxiDN1zCj1_EyM-XvkCIeP9wQEJOoLXAnuVuz0nBtOEDzHWLk--K8OElmLbDrG9NYknvuAcK0vIYHLMqPXNVYuwztGGiOOQK-m4EfILTcUebw';
const ListCard = styled.div`
    width : 15rem;
    height : 21rem;
    background : url(${(props) => props.imageId ? ('https://image.tmdb.org/t/p/original'+props.imageId) : dummy});
    background-repeat: round;
    border-radius: 10% 10% 0 0;
    display: flex;
    align-items: flex-end;
    animation: ${fade} 1.2s ease-in-out;
    animation-fill-mode: both;

    @media(max-width:430px){
        width: 7rem;
        height: 10rem;
    }

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


const MovieCard = (props) => {
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

export default MovieCard;