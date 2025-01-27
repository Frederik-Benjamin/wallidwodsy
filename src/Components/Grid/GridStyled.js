import styled from "styled-components";

export const GridStyled = styled.div`

display: grid;
gap: 2rem;



&.poster-grid {
  grid-template-columns: repeat(3, 1fr);
}

.frontpage-grid {
  grid-template-columns: repeat(2, 1fr);
}

`;

