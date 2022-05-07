import styled from "styled-components";

const SidebarItem = styled.div`
    height: 70px;
    width: 96px;
    left: 91px;
    top: 300px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 2.09%;
    right: 96.49%;
    top: 38.38%;
    bottom: 59.28%;
    &:hover{
        left: 2.09%;
        right: 96.49%;
        top: 38.38%;
        bottom: 59.28%;
        background: linear-gradient(180deg, #679CF6 0%, #4072EE 100%);
        box-shadow: 0px 5px 15px #ACB2C1;
        border-radius: 5px;
        transform: matrix(-1, 0, 0, 1, 0, 0);
    }
`
export {SidebarItem}