import styled from "styled-components";

import Num from "./num";
import Next from "./next";

const List = styled.ul`
    list-style: none;
    display: flex;
`;

List.Num = Num;
List.Next = Next;

export default List;