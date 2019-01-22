import styled from "styled-components";

const Image = styled.button`
    position: absolute;
    background-color: #FFF;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    top: calc(50% - 1.5rem);
    img {
        height: 1.5rem;
    }
`;

export default Image;