import styled from "styled-components";

import Button from "./Button";
import Image from "./Image";
import Text from "./Text";

const BookAside = styled.div`
    background-color: #F58538;
    border-radius: 15px;
    width: 16rem;
    margin-bottom: 2rem;
    padding: 3rem 2rem;
`;

BookAside.Button = Button;
BookAside.Image = Image;
BookAside.Text = Text;

export default BookAside;