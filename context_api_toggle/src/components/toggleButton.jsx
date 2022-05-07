import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
const Theme = styled.div`
    position: absolute;
    height: 20px;
    width: 70px;
    left: 450px;
    top: 40px;
    color:${() => useContext(ThemeContext).theme === "Light" ? "#000000" : "#FFFFFF"};
    border-radius: nullpx;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
`
const ToggleOut = styled.div`
    position: absolute;
    height: 45px;
    width: 87px;
    border-radius: 20px;
    background: #C4C4C4;
    display: flex;
    justify-content: ${() => useContext(ThemeContext).theme==="Light"?"flex-start":"flex-end"};
    align-items: center;
    left: 525px;
    top: 28px;
    /* border: 1px solid black; */
`
const ToggleIn = styled.div`
    height: 47px;
    width: 47px;
    border-radius: 0px;
    background: ${() => useContext(ThemeContext).theme === "Light" ? "#2991CB" : "#29CB97"};
    border-radius: 47%;
`

const ToggleButton = ({ onClick }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div onClick={onClick}>
            <Theme> {theme} Mode</Theme>
            <ToggleOut>
                <ToggleIn></ToggleIn>
            </ToggleOut>
        </div>
    )
}

export { ToggleButton };

