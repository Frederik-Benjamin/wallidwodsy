import styled from "styled-components";

export const GridStyled = styled.div`

display: grid;
gap: 2rem;


&.posterpage-grid {
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }

}

&.frontpage-grid {
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
}


&.aboutpage-grid{

  align-items: flex-end;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
}

`;

