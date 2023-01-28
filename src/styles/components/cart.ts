import styled from "styled-components";

export const CartHead = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    height: 5vh;
    color : #FFFFFF;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 1.7rem;
    height: 15%;
    line-height: 33px;
    padding: 30px;

`;

export const CloseCart = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #000000;
    font-size: 28px;
    font-weight: 400;
    min-width: 38px;
    cursor: pointer;
    border-radius: 100%;
    min-height: 38px;

`;

export const CartItens = styled.div`
    display: flex;
    flex-direction: column;
    height: 70%;
    width: 100%;
`;

export const OrderDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

`;

export const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 20px;
    justify-content: space-between;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 15px;
    color: #FFFFFF;

`;

export const FinishOrder = styled.button`
    font-family: 'Montserrat';
    width: 100%;
    color: #FFFFFF;
    outline: none;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    padding: 40px;
    line-height: 15px;
    background: #000000;
    cursor: pointer;

`;