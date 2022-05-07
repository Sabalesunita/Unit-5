import styled from "styled-components";
import { SingleUserDiv } from "./singleuser";
import { ToggleButton } from "./toggleButton";
import downArrow from "../Select Dropdown.png";
import singleUserAvatar from '../Bitmap (1).png';
import singleUserAvatar1 from '../Bitmap (2).png';
import singleUserAvatar2 from '../Bitmap (3).png';
import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const Body =styled.div`
    /* border: 1px solid black; */
    height: 1024px;
    padding: 0px 0px 0px 110px;
    background-color: ${() => useContext(ThemeContext).theme === "Light" ? "#FFFFFF" : "#1F2327"};
`
const DashBoard=styled.div`
    position: absolute;
    left: 8.47%;
    right: 75.42%;
    top: 2.93%;
    bottom: 92.87%;
    /* border: 1px solid black; */
    font-family: Roboto;
    font-size: 36px;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 0px;
    text-align: left;
    color: ${() => useContext(ThemeContext).theme === "Light" ? "#31394D" : "#FFFFFF"};

`
const ActiveUserDiv = styled.div`
    position: relative;
    /* min-height: 514px; */
    width: 452px;
    height: auto;
    padding: 10px;
    left: 2.6%;
    right: 60.14%;
    top: 11.04%;
    bottom: 38.77%;
    /* border: 1px solid black; */
    background: ${() => useContext(ThemeContext).theme === "Light" ? "#FFFFFF" : "#292E33"};
    box-shadow: 0px 1px 4px #E5E9F2;
    border-radius: 5px;
`
const Header=styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0px;
    text-align: left;
    color:${() => useContext(ThemeContext).theme === "Light" ? "#31394D" : "#FFFFFF"};
    padding: 20px;
    & img{
        height: 8px;
        width: 8px;
        border-radius: 0.5px;

    }
    & div p:nth-child(1){
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: left;
        color: #748AA1 ;
    }
    & div p:nth-child(2){
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: left;
        color: ${() => useContext(ThemeContext).theme === "Light" ? "#31394D" : "#FFFFFF"};
    }
`
const BodyElem = () => {

    const { handleThemeChange } = useContext(ThemeContext);
    
    return (
        <Body>
            <DashBoard>My DashBoard</DashBoard>
            <ToggleButton onClick={() => { handleThemeChange() }}></ToggleButton>
            <ActiveUserDiv>
                <Header>
                    <p>Active Users</p>
                    <div className="date">
                        <p>for</p>
                        <p>August 2020 </p>
                        <img src={downArrow} alt="" />
                    </div>
                </Header>
                <SingleUserDiv
                    name={"Nrupul Dev"}
                    place={"Bangalore, India"}
                    level={15}
                    points={4723}
                    image={singleUserAvatar}
                ></SingleUserDiv>

                <SingleUserDiv
                    name={"Sandhya"}
                    place={"Copenhagen, Denmark"}
                    level={11}
                    points={2339}
                    image={singleUserAvatar1}
                ></SingleUserDiv>

                <SingleUserDiv
                    name={"Elon Tusk"}
                    place={"Califronia, USA"}
                    level={6}
                    points={1884}
                    image={singleUserAvatar2}
                ></SingleUserDiv>

                
            </ActiveUserDiv>
            
        </Body>
    )
}

export {BodyElem}