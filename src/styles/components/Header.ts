import styled from "styled-components";

export const Header = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    background: #0F52BA;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
    max-height: 10vh;
    font-family: 'Montserrat';
`;

export const Checkout = styled.div`
    width: 80px;
    height: 40px;
    background: #FFFF;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
`;

export const Logo = styled.div`
    display: flex;
    font-family: 'Montserrat';
    flex-direction: row;
    color: #FFFF;
    h1{
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        line-height: 19px;
    }
    .secondary{
        font-size: 15px;
        line-height: 1;
        align-self: flex-end;
        margin-left: 5px;
        margin-top: 8px;
    }
`