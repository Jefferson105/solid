import styled from "styled-components";

import Text from "./Text";

const Box = styled.div`
    position: absolute;
    background-color: #051526;
    color: #FFF;
    text-align: center;
    padding: 1rem;
    border-radius: 20px;
    top: 110px;
    left: 115px;
    width: 276px;
    height: 216px;
`;

Box.Text = Text;

export default Box;