import styled from "styled-components";


export const ProductSkeleton = styled.div`
    margin-top: 20px;
    width: 210.56px;
    height: 260px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 8px;
    margin-left: 20px;

    @media (prefers-reduced-motion: no-preference) {
        animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
`;

export const ImgBoxSkeleton = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    background: rgb(226,225,235);
    align-items: center;
`;

export const RowSkeleton = styled.div`
    width: 100%;
    height: 10%;
    border-radius: 5px;
    margin-top:5px; 
    background: rgb(226,225,235);
`;

