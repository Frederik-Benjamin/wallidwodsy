import { GridStyled } from './GridStyled';

// Grid Layout
export const Grid = ({ children, gridStyle }) => {
    return (
        <GridStyled className={gridStyle}>
            {children}
        </GridStyled>
    );
};



