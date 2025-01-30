import styled from "styled-components";

export const NavigationStyled = styled.nav`

display: flex;
flex-direction: column;
gap: 2rem;
padding: 2rem 2rem 0 2rem;
margin: 0;
background-color: white;

.spaceLinje {
    width: 87%;
    height: 3px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background-color: orange;
    
}


    h1 a {
    font-size: 50px;
    margin: 0;
    padding-left: 7rem;
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
    padding-left: 8rem;
    margin: 0;

        li {
        display: flex;
        align-items: flex-end;
        white-space: nowrap;
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: clamp(8px, 1vw, 18px);

            a {
            
            text-transform: uppercase;
            text-decoration: none;
            color: black;
            }
        }

        .basketImage {
        width: 35px;
        height: 35px;
        transition: 400ms;
        }

        .basketImage:hover {
            cursor: pointer;
            transition: 400ms;
            scale: 1.4;
        }

    }



`
