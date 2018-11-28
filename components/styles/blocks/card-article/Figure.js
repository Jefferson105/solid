import styled from "styled-components";

const Figure = styled.figure`
    width: 30%;
    height: 100%;
    background-image: url(${props => props.url});
    background-size: cover;
    border-radius: 15px 0 0 15px;
`;

export default Figure;