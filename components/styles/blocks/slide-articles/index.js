import styled from "styled-components";

import Arrow from "./arrow";
import Button from "./button";
import Category from "./category";
import InfoContent from "./Info-content";
import Item from "./Item";
import Name from "./name";
import Photo from "./photo";
import Title from "./title";

const List = styled.ul`
    list-style: none;
    width: 80%;
    margin: auto;
`;

List.Arrow = Arrow;
List.Button = Button;
List.Category = Category;
List.InfoContent = InfoContent;
List.Item = Item;
List.Name = Name;
List.Photo = Photo;
List.Title = Title;

export default List;