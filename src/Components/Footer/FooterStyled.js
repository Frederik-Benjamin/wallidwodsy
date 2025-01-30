import styled from "styled-components";

export const FooterStyled = styled.section`

background-color: white;
/* display: flex; */
flex-direction: row;
justify-content: space-between;
padding: 0 10rem 0 8rem;
margin: 0;
width: 100%;
box-sizing: border-box;

.InfoFooter {
    display: flex;
}

h1,
p {
margin: 0;
padding: 0;
}

.spaceLinje {
    width: 100%;
    height: 3px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background-color: orange;

    margin-top: 3rem;
}

`;