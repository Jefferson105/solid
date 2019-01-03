import styled from "styled-components";

export default styled.header`
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${props => props.url});
    background-size: cover;
    background-position-y: 40%;
    border-bottom: thin solid #D2D2D2;
    position: relative;
    background-color: #1B4E85;
    background-blend-mode: overlay;
`;