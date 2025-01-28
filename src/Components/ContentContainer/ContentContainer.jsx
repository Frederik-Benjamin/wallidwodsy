import { ContentContainerStyled } from "./ContentContainerStyled";

// Content Wrapper
export const ContentContainer = ({ children }) => {
    return (
        <ContentContainerStyled>
            {children}
            <span className="spaceLinje"></span>
        </ContentContainerStyled>
    );
}