import styled from "styled-components";

import Author from "./Author";
import Button from "./Button";
import Category from "./Category";
import Figure from "./Figure";
import Info from "./Info";
import Name from "./Name";
import Photo from "./Photo";
import Text from "./Text";
import Title from "./Title";

const List = styled.div`
    background-color: #FFF;
    box-shadow: 0 0 1px 1px rgba(0,0,0,.2);
`;

List.Author = Author;
List.Button = Button;
List.Category = Category;
List.Figure = Figure;
List.Info = Info;
List.Name = Name;
List.Photo = Photo;
List.Text = Text;
List.Title = Title;

export default List;