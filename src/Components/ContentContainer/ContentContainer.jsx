import { ContentContainerStyled } from "./ContentContainerStyled";

export const ContentContainer = ({ children }) => {
    return (
        <ContentContainerStyled>
            {children}
            <span className="spaceLinje"></span>
        </ContentContainerStyled>
    );
}