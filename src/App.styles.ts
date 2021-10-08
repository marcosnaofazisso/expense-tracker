import { url } from "inspector";
import styled from "styled-components";
import money from '../src/img/money.jpg'

export const Container = styled.div`

`;
export const Header = styled.div`
    background-image: url(${money});
    height: 150px;
    text-align: center;
`;
export const HeaderText = styled.h1`
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 60px;
    text-shadow: 5px 5px 1px #000;
    padding-top: 30px;


`;
export const Body = styled.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;

`;