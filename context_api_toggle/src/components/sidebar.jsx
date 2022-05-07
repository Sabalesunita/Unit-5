import styled from "styled-components";
import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";

const SideBar = styled.div` 
    
    position: absolute;
    left: 0%;
    right: 94.38%;
    top: 0%;
    bottom: 0%;
    background: ${()=> useContext(ThemeContext).theme === "Light" ? "#FFFFFF" :"#16191C"};
    box-shadow: 0px 0px 5px #E5E9F2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export {SideBar};