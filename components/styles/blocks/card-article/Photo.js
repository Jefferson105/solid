import styled from "styled-components";

const Photo = styled.figure`
    height: 2rem;
    width: 2rem;
    background-image: url(${props => props.url});
    background-size: cover;
    border-radius: 50%;
`;

export default Photo;