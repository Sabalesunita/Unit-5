
import styled from "styled-components";
import more from '../Combined Shape.png';
import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const SingleUser = styled.div`
    padding: 20px;
    border-bottom: 1px solid ${() => useContext(ThemeContext).theme === "Light" ? "#EBEDF4" : "#33393F"};
    background-color: ${() => useContext(ThemeContext).theme === "Light" ? "#FFFFFF" : "#292E33"};
;
`
const ImgDiv=styled.div`
    height: 40px;
    width: 40px;
    left: 152px;
    top: 199px;
    border-radius: 0px;
    & img{
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }
`
const Name=styled.div`
     height: 100%;
    width: 70%;
    padding: 0px;
    box-sizing: border-box;
    & p{
        font-family: Roboto;
            font-size: 12px;
            font-weight: 400;
            line-height: 14px;
            letter-spacing: 0px;
            text-align: left;
            border: 0px solid black;
            margin: 4px;
            color: ${() => useContext(ThemeContext).theme === "Light" ? "#31394D" : "#748AA1"}
    };
    & p:nth-child(odd) {
            font-family: Roboto;
            font-size: 14px;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 0px;
            text-align: left;
            color: ${() => useContext(ThemeContext).theme === "Light" ? "#31394D" : "#FFFFFF"}; ;
        }

`
const Rec=styled.div`
    height: 6px;
    width: 282px;
    left: 152px;
    top: 256px;
    border-radius: 3px;
    background: #29CB97;
    box-shadow: 0px 5px 10px 0px #0000001A;
`
const One=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid yellow; */
    height: 40px;
`
const Two=styled.div`
    border: 1px solid E5E9F2;
    height: 6px;
    width: 392px;
    left: 152px;
    top: 256px;
    margin: 15px 0px 0px;
    border-radius: 4px;
    background: #E5E9F2;
`
const Three=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    width: 392px;
    padding: 10px 0px;
    & p{
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0px;
        color: ${() => useContext(ThemeContext).theme === "Light" ? "#31394D" : "#FFFFFF"};;
    };
    & p:nth-child(even){
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: right;
  color: ${() => useContext(ThemeContext).theme === "Light" ? "#31394D" : "#FFFFFF"};;
}
`

const SingleUserDiv = ({ name, place, level, points, image }) => {
    const Two = styled.div`
    border: 1px solid E5E9F2;
    height: 6px;
    width: 392px;
    left: 152px;
    top: 256px;
    margin: 15px 0px 0px;
    border-radius: 4px;
    background: #E5E9F2;

`
    const Rec = styled.div`
    height: 6px;
    width: ${(392/20)*level}px;
    left: 152px;
    top: 256px;
    border-radius: 3px;
    background: ${level >= 15 ? "#29CB97" : level >= 10 && level < 15 ? "#4072EE" :"#B558F6"};
    box-shadow: 0px 5px 10px 0px #0000001A;
`
    return (
        <SingleUser>
            <One>
                <ImgDiv>
                    <img src={image} alt="" />
                </ImgDiv>                                   
                <Name>
                    <p>{name}</p>
                    <p>{place}</p>
                </Name>
                <div className="more"><img src={more} alt="" /></div>
            </One>
            <Two>
                <Rec></Rec>
            </Two>           
            <Three>
                <p>Professional Level {level}</p>
                <p>{points} Points</p>
            </Three>
        </SingleUser>
    )
}

export {SingleUserDiv}