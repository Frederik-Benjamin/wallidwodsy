import styled from "styled-components";

export const Genrestyled = styled.ul`
display: flex;
flex-direction: column;
padding: 0;
gap: 5px;

li {
list-style: none;   
font-size: 18px;
border: solid 2px rgb(193, 129, 10);
border-radius: 5px;
padding: 10px;
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