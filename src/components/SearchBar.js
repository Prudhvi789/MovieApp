import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

const SearchWrapper = styled.div`
        display:inline-flex;      
        align-items : center;

        >svg{
            padding : 4px;
            border-radius : 28%;
            background-color : #ee0d0d;
        }

        >svg:hover{
            background : #ee0d0dd9;
            cursor : pointer; 
        }
    `;

    const InputArea = styled.div`
        margin-right : 20px;
        display : inherit;
        align-items : inherit;
        

        >input{
            border : 2px solid black;
            border-radius : 5px;
            padding : 5px;
            width : 250px;
            background-color : #958b8b;
        }

        >svg{
            margin-left: -30px;
            display: ${props => props.hasValue ? 'initial' : 'none'}            
        }

        >svg:hover{
            background : #e1dcdc;
            cursor : pointer; 
        }

        
    `;


const SearchBar=(props)=>{
    const [word,setword] = useState("");
 
    const handler = () => {
        props.setter('');
        setword('');
    }

    
    return(
        <SearchWrapper>
            <InputArea hasValue={word}>
                <input value={word} onChange={(event)=>{setword(event.target.value)}} />
                <ClearIcon onClick={handler}/>
            </InputArea>
            <SearchIcon onClick={()=>{props.setter(word)}}/>
        </SearchWrapper>    
    )
}

export default SearchBar;