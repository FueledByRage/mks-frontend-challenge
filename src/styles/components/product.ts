import styled from "styled-components";


export const ProductCard = styled.div`
    margin-top: 20px;
    font-family: 'Montserrat';
    width: 205.56px;
    height: 245px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 8px;
    margin-left: 45px;
    justify-content: space-between;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
`;

export const ImgBox = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 80%;
        height: 80%;
    }
`;

export const Details = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 0px 10px;
`;

export const ProductDetails = styled.div`
    width: 60%;
    height: 8%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #2C2C2C;
    line-height: 19px;
`;

export const Price = styled.div`
    display: flex;
    flex-direction: row;
    height: 26px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #373737;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    padding: 2px 9px;
`;

export const AboutProduct = styled.div`
    width: 100%;
    font-family: 'Montserrat';
    font-style: normal;
    padding: 2px 10px;
    font-size: 10px;
    color: #2C2C2C;
    font-weight: 300;
    line-height: 12px;
`;

export const BuyButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: 'Montserrat';
    outline: none;
    border: none;
    color: white;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    padding: 8px 0;
    width: 100%;
    border-radius: 0px 0px 8px 8px;
    background: #0F52BA;
    cursor: pointer;
    span{
        margin-left: 10px;
    }
    :disabled{
        background: gray;
    }
`