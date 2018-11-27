import styled from "styled-components";

const Image = styled.figure`
    width: 50%;
    box-sizing: border-box; 
    background-image: url(${props => props.url});
    background-size: cover;
`;

export default Image;