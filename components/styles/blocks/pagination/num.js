import styled from "styled-components";

const Num = styled.li`
    background-color: ${props => props.selected ? 'transparent' : '#1B4E85'};
    color: ${props => props.selected ? '#7E7E7E' : '#FFF'};
    border: thin solid ${props => props.selected ? '#7E7E7E' : '#1B4E85'};
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    margin-right: .5rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Num;