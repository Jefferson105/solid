import styled from "styled-components";

const Item = styled.li`
    display: flex;
    background-color: #F9F9F9;
    height: 25rem;
    @media (max-width: 1009px){
        flex-direction: column;
        margin-bottom: 3rem;
    }
`;

export default Item;