import React from 'react';
import { useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Star } from '@material-ui/icons';

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

const DetailBox = styled.div`{
    color: aliceblue;
    padding: 22rem;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${(props) => ('https://image.tmdb.org/t/p/original'+props.imageId)});
    background-size: auto,auto 100%;
    background-repeat: no-repeat;
    background-position-x: center;
    background-blend-mode: multiply;
    
    >div{
        animation: ${fade} 2s ease-in-out;
        animation-fill-mode: both;
    }
    
    @media(max-width: 430px){
        padding: 2rem;
        height : 95vh;

        >div>p{
            margin-bottom : 2rem !important;
            margin-top: 70%;
        }
    }
<<<<<<< HEAD

    @media(max-width: 768px){
        padding: 15rem;
        height : 95vh;
=======
   @media(max-width: 768px){
        padding: 15rem;
        height : 95vh;

>>>>>>> f42976ff2339b7cff05183e29e7e35857e4f425b
        >div>p{
            margin-bottom : 2rem !important;
            margin-top: 70%;
        }
    }
<<<<<<< HEAD

    @media(min-width:1450px){
        padding : 22rem;
    }
=======
>>>>>>> f42976ff2339b7cff05183e29e7e35857e4f425b
}`;

const Titles = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #b3b3b3;
    font-size: smaller;
    margin: 0 0 3rem -6rem;

    @media(max-width: 430px){
        margin: 0 0 1rem 0;
        flex-direction : column;
        align-items: flex-start;

        >p{
            margin-top : 5px !important;
        }
    }
`;

const MovieDetails = () => {
    const location = useLocation();
    console.log('history----',location.state);
    const movie = location.state.item;
    const genre = location.state.genre;
    return(
        <DetailBox imageId={movie.poster_path}>
            <div>
                <p style={{fontSize: 'x-large',marginBottom: 5+'rem'}}>{movie.title}</p>
                <Titles>
                    <div style={{display : 'flex'}}>
                        {genre.map((ele)=>{
                            return(<p key={ele[0].id} style={{border: 1+'px solid',padding: 3+'px',margin : 0}}>{ele[0].name}</p>)
                        })}
                    </div>
                    <p style={{margin:0, display: 'flex',alignItems: 'center'}}><Star style={{fill :'#c59e00 '}}/> {movie.vote_average}</p>
                    <p style={{margin:0}}>Released : {movie.release_date.substr(0,4)}</p>    
                </Titles>
                <div>    
                    <p style={{textAlign : 'start',fontSize: 'large'}}>Story Line</p>    
                    <p style={{color: "#b3b3b3",fontSize: "smaller",textAlign: "justify"}}>{movie.overview}</p>
                </div>
            </div>
        </DetailBox>
    )
}

export default MovieDetails;
