import styled from "styled-components";

export const NavigationStyled = styled.nav`

display: flex;
flex-direction: column;
gap: 2rem;
padding: 4rem 2rem 0 2rem;

div {
display: flex;
justify-content: space-between;
text-transform: uppercase;
align-items: flex-end;

    h1 {
    font-size: 50px;
    margin: 0;
    }

    ul {
    display: flex;
    align-items: flex-end;
    gap: 3rem;
    padding: 0;
    margin: 0;

        li {
        display: flex;
        align-items: flex-end;
        white-space: nowrap;
        list-style: none;
        padding: 0;

            a {
            font-size: 18px;
            text-transform: uppercase;
            text-decoration: none;
            color: black;
            }
        }
    }
}

img {
width: 35px;
}

span {
width: 100%;
height: 3px;
position: relative;
left: 50%;
transform: translateX(-50%);
background-color: orange;
}

`
