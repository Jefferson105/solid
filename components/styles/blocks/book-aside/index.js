import styled from "styled-components";

import Button from "./Button";
import Image from "./Image";
import Text from "./Text";

const BookAside = styled.div`
    border-radius: 15px;
    width: 18rem;
    margin-bottom: 2rem;
    position: relative;
    overflow: hidden;
    z-index: 1;
`;

BookAside.Button = Button;
BookAside.Image = Image;
BookAside.Text = Text;

export default BookAside;

/*
padding: 3rem 2rem;
background-color: #F58538;
::before {
        content: "";
        position: absolute;
        top: -10%;
        left: -10%;
        background-color: #DD7228;
        width: 120%;
        height: 35%;
        transform: rotate(-15deg);
        z-index: 0;
    }
*/