import styled from "styled-components";

const Phrase = styled.div`
    width: 50%;
    box-sizing: border-box;
    color: #494949;
    display: flex;
    align-items: center;
    padding: 0 5rem;
    font-size: 1rem;
    line-height: 24px;
    @media (max-width: 1009px){
        padding: 0;
        width: 100%;
        margin-top: 1rem;
    }
`;

export default Phrase;