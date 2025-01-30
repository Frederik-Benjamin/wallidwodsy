import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

html,
body {
margin: 0;
padding: 0;
box-sizing: border-box;
}

html {
height: 100%;
min-height: 100vh;
background-color:rgb(157, 129, 118);
}
body {
/* min-width: 750px; */
display: flex;
justify-content: center;
}

h2 {
margin: 0;
margin-top: 4rem;
margin-bottom: 3rem;
font-size: 30px;
}


`