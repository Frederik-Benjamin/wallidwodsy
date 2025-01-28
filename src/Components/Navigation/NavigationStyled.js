import styled from "styled-components";

export const NavigationStyled = styled.nav`

display: flex;
flex-direction: column;
gap: 2rem;
padding: 2rem 2rem 0 2rem;
margin: 0;
background-color: white;



    h1 a {
    font-size: 50px;
    margin: 0;
    color: #D97852;
    text-decoration: none;


    span{
        font-size: 40px;

    }
}

ul {
    display: flex;
    justify-content: flex-end;
    gap: 3rem;
    padding: 0;
    padding-right: 7rem;
    margin: 0;

        li {
        display: flex;
        align-items: flex-end;
        white-space: nowrap;
        list-style: none;
        padding: 0;
        margin: 0;

            a {
            font-size: 18px;
            text-transform: uppercase;
            text-decoration: none;
            color: black;
            }
        }
    }

.basketImage {
width: 40px;
height: 40px;
transition: 400ms;
}

.basketImage:hover {
    cursor: pointer;
    transition: 400ms;
    scale: 1.4;
}

.spaceLine {
width: 100%;
height: 3px;
position: relative;
left: 50%;
transform: translateX(-50%);
background-color: orange;
}

`
