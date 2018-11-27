import styled from "styled-components";

export const HeaderMini = styled.header`
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${props => props.url ? props.url : "/static/img/quem-somos-header.jpg"});
    background-size: cover;
    background-position-y: 40%;
    border-bottom: thin solid #D2D2D2;
    position: relative;
`;

export const HeaderTitle = styled.h2`
    color: ${props => props.color ? props.color : "#223952" };
    max-width: 900px;
    text-align: center;
    font-size: 2.9rem;
    line-height: 50px;
    font-weight: lighter;
    position: relative;
    bottom: ${props => props.top ? "4rem" : "0"};
`;

export const ButtonHeader = styled.button`
    background-color: #FFF;
    width: ${props => props.mini ? "3rem" : "5.5rem"};
    height: ${props => props.mini ? "3rem" : "5.5rem"};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    box-shadow: 0 2px 25px 0 rgba(0, 0, 0, 0.2);
`;

export const IconHeader = styled.img`
    height: ${props => props.mini ? "2rem" : "3.5rem"};
`;

export const TxtBold = styled.p`
    width: 70%;
    font-size: 1.5rem;
    color: #494949;
    font-weight: bold;
    text-align: center;
    margin: 0 auto;
    margin-top: 5rem;
    line-height: 35px;
`;

export const WrapperTxtImg = styled.div`
    display: flex;
    margin: 4rem 0;
`;

export const Img50 = styled.figure`
    width: 50%;
    background-image: url(${props => props.url});
    background-size: 150% 120%;
`;

export const WrapperImg100 = styled.div`
    width: 100%;
    height: 280px;
    background-image: url(${props => props.url ? props.url : "/static/img/img_solid8.jpg"});
    background-size: cover;
    margin: 4rem 0;
`;

export const Txt50 = styled.p`
    width: 50%;
    background-color: #223952; 
    padding: 5rem 17% 5rem 4rem;
    color: #FFF;
    font-size: 1.4rem;
    box-sizing: border-box;
    line-height: 27px;
`;

export const TxtMini = styled.p`
    font-size: 1rem;
    max-width: 850px;
    color: #494949;
    margin: 0 auto;
    text-align: center;
`;

export const GreenButton = styled.button`
    align-items: center;
    margin: 4rem auto;
    display: block;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    color: white;
    background-color: #36ab12;
    border-radius: 30px;
    font-size: 1.2rem;
    height: 3rem;
    width: 25rem;
    cursor: pointer;
`;