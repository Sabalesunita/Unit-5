
import styled from 'styled-components'

const Button= styled.button`
    border-radius:2px;
    color: ${(props)=>(props.theme.color)};
    padding: 15px;
    border: ${(props)=>(props.theme.border)};
    margin-top:10px;
    margin-left:10px;
    cursor: pointer;
    background-color:${(props)=>(props.theme.background)};

    &:hover{
        color:rgb(24,144,255);
        border:1px solid rgb(24,144,255);
    }
`;
export {Button}