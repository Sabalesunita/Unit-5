import styled from "styled-components";

const User = styled.div`
    position: absolute;
    left: 1.46%;
    right: 95.76%;
    top: 3.32%;
    bottom: 92.77%;
    height: 40px;
    width: 40px;
    left: 21px;
    top: 34px;
    /* border: 1px solid black; */
`
const Status = styled.div`
position: relative;
    height: 15px;
    width: 15px;
    left:72%;
    top: 0px;
    border-radius: 50%;
    background: white; 
    display  : flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    & div{
        height: 10px;
        width: 10px;
        left:72%;
        top: 0px;
        border-radius: 5px;
        background: #29CB97; 
    }
`
const Avatar=styled.div`
    position: absolute;
    left: 1.46%;
    right: 95.76%;
    top: 3.32%;
    bottom: 92.77%;
    /* border: 1px solid black; */
    border-radius: 50%;
    height: 90%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    & img{
        border-radius: 50%;

    }
`
export { User,Status,Avatar };