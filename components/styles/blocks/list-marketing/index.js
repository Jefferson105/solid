import styled from "styled-components";

import Item from "./Item";
import Image from "./Image";
import Phrase from "./Phrase";

const List = styled.ul`
    list-style: none;
    margin: 3rem 0;
`;

List.Item = Item;
List.Image = Image;
List.Phrase = Phrase;

export default List;