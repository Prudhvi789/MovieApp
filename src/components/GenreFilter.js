import styled  from "styled-components";
import React from "react";
import Modal from '@material-ui/core/Modal';
import { Dehaze } from "@material-ui/icons";

const ToggleButton = styled.div`
    border : 1px solid white;
    color : white;
    padding : 5px;
    background : ${(props)=>(props.isactive ? 'red' : 'black')};

    :hover {
        cursor : pointer;
        background : rgba(238, 13, 13, 0.85);
    }
`;

const SubmitButton = styled.div`
    margin-top: 15px;
    margin-left: 50%;
    padding: 7px;
    border: transparent;
    width: 5rem;
    background: rgba(238, 13, 13, 1);
    color: inherit;

    @media(max-width: 450px){
        width: unset;
        margin-left: unset;
    }
`;

const FilterBox = styled.div`
    display: grid;
    grid-template-columns: repeat(7,1fr);
    grid-gap: 10px;

    @media(max-width: 768px){
        grid-template-columns: repeat(3, 1fr);
    }

@media(max-width: 425px){
    grid-template-columns: repeat(2, 1fr);
}
`;


const GenreFilter = (props) => {
    const [ genres, setGenres ] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const genreUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=74a9f33e3ae7ed37c1398178d30d8c0f&language=en-US';
    const selectedRef = React.useRef([]);

    React.useEffect(()=>{
        fetch(genreUrl,setGenres)
        .then(response => response.json())
        .then(data => {
            setGenres(data.genres);
            sessionStorage.setItem('genres',JSON.stringify(data.genres))
        })
    },[])

    const handler=()=>{
        const str = selectedRef.current.toString();
        const selectUrl='https://api.themoviedb.org/3/discover/movie?api_key=74a9f33e3ae7ed37c1398178d30d8c0f&language=en-US&sort_by=popularity.desc&page=1&with_genres='+str;
        fetch(selectUrl)
        .then(response => response.json())
        .then(data => { 
            props.setOptions(data.results.slice(0,12))
        })
        setOpen(false)
    }

    return(
        <div style={{marginLeft: 3+'%'}}>
            <button onClick={()=>setOpen(true)}><Dehaze /></button>
            <Modal
            open={open}
            onClose={()=>setOpen(false)}
            style={{margin : 8+'%'}}  
            >
                <form>
                    <FilterBox >
                        {genres.map((ele)=>{
                            return (<SelectButton value={ele} key={ele.id} initial={selectedRef.current.includes(ele.id)}
                                setter={(id) => selectedRef.current = id in selectedRef.current ? selectedRef.current :  [...selectedRef.current,id]} 
                                unset={(id) => selectedRef.current = selectedRef.current.filter((ele)=> ele !== id )}/>);
                        })}
                    </FilterBox>
                    <SubmitButton type= "button" onClick={handler} > Filter </SubmitButton>
                </form>
            </Modal>
      </div>
    )
}

export default GenreFilter;

const SelectButton = (props) => {
    const [active,setActive] = React.useState(props.initial);
   
    return(
        <ToggleButton isactive={active} onClick={()=>{
            if(active){ 
                setActive(false);
                props.unset(props.value.id)
            }
            else{ 
                setActive(true);
                props.setter(props.value.id)
            }    
        }}>{props.value.name}</ToggleButton>
    )
}
