import styled from "styled-components";

export const CartItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: #FFF;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    width: 85%;
    height: 80px;
    margin-top: 20px;
    border-radius: 8px;
    align-self: center;
    justify-content: space-between;
    font-size: .8rem;
    align-items: center;
    padding-right: 20px;

    .productImg{
        width: 46px;
        height: 57px;
    }
`;

export const RemoveCartItem = styled.div`
    top: -40px;
    left: 102%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #000000;
    font-weight: 400;
    color: #FFF;
    min-width: 18px;
    cursor: pointer;
    border-radius: 100%;
    min-height: 18px;
    font-size: 14px;
`;

export const QuantityButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50px;
    height: 19px;
    border: 0.3px solid #BFBFBF;
    border-radius: 4px;
    padding: 10px 5px;
    font-size: 12px;
    .quantityChange{
        cursor: pointer;
    }
    #minus{
        border-right: 1px solid silver; 
        padding-right:  5px;   
    }
    #plus{
        border-left: 1px solid silver; 
        padding-left:  5px;  
    }
`;



