import styled from "styled-components";

export const Div = styled.div`
    color: ${(props)=>(props.theme.color)};
    background-color:${(props)=>(props.theme.background)} ;
    display: flex;
    justify-content: space-around;
    width: 30%;
    align-items: center;
`

export const Main= styled.div`
    color: ${(props)=>(props.theme.color)};
    background-color:${(props)=>(props.theme.background)} ;
   
    padding: 10px;
`

export const Appdiv= styled.div`
    color: ${(props)=>(props.theme.color)};
    background-color:${(props)=>(props.theme.background)} ;
    width: 100%;
    height: 800px;
`