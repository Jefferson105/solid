import styled from "styled-components";

import Author from "./Author";
import Button from "./Button";
import Category from "./Category";
import Figure from "./Figure";
import Info from "./Info";
import Item from "./Item";
import Name from "./Name";
import Num from "./Num";
import Pagination from "./Pagination";
import Photo from "./Photo";
import Proximo from "./Proximo";
import Text from "./Text";
import Title from "./Title";

const List = styled.ul`
    background-color: #FFF;
    list-style: none;
`;

List.Author = Author;
List.Button = Button;
List.Category = Category;
List.Figure = Figure;
List.Info = Info;
List.Item = Item;
List.Name = Name;
List.Num = Num;
List.Pagination = Pagination;
List.Photo = Photo;
List.Proximo = Proximo;
List.Text = Text;
List.Title = Title;

export default List;