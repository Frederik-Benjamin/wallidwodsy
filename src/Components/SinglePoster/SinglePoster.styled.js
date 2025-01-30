import styled from "styled-components";

export const SinglePosterStyled = styled.div`


.singlePosterContent {
    display: flex;
    gap: 2rem;
}

.posterDetails {
    display: flex;
    flex-direction: column;
}

p {
    max-width: 500px;
    
}

h2 { 
   margin: 0;
}
img{
    width: 100%;
    max-height: 500px;
    object-fit: contain;
    scale: 1/1;
}

 `