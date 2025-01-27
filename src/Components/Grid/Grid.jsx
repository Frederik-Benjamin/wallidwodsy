import { GridStyled } from './GridStyled';

export const Grid = ({ children, gridStyle }) => {
    return (
        <GridStyled className={gridStyle}>
            {children}
        </GridStyled>
    );
};



