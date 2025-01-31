import styled from "styled-components";

export const Genrestyled = styled.ul`
display: flex;
flex-direction: column;
min-width: 200px;
padding: 0;
gap: 5px;
border-right: 1px black solid;
height: 100%;


li {
list-style: none;   
font-size: 18px;
padding: 5px;
width: 100px;
transition: 0.2s;
}

li:hover{
    cursor: pointer;
    background-color: rgb(255, 171, 2);
    color: white;
    font-weight: 600;
    scale: 1.05;
}

a {
    text-decoration: none;
    color: black;

}
`